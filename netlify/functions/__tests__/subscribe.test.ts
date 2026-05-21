/**
 * @jest-environment node
 */
import type { Context } from '@netlify/functions';

process.env.SUPABASE_URL = 'https://test.supabase.co';
process.env.SUPABASE_KEY = 'test-anon-key';
process.env.ML_API_URL = 'https://connect.mailerlite.com/api';
process.env.ML_API_KEY = 'test-ml-key';
delete process.env.ML_GROUP_ID;

const mockMaybeSingle = jest.fn();
const mockInsert = jest.fn();
const mockUpdateEq = jest.fn();

jest.mock('@supabase/supabase-js', () => ({
  createClient: () => ({
    from: () => ({
      select: () => ({ eq: () => ({ maybeSingle: mockMaybeSingle }) }),
      insert: mockInsert,
      update: () => ({ eq: mockUpdateEq }),
    }),
  }),
}));

import handler from '../subscribe.mts';

const mockContext = { ip: '127.0.0.1' } as unknown as Context;

const makeRequest = (body: unknown, userAgent = 'jest-test') =>
  new Request('https://test.com/.netlify/functions/subscribe', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'user-agent': userAgent,
    },
    body: JSON.stringify(body),
  });

describe('subscribe handler', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest
      .spyOn(globalThis, 'fetch')
      .mockResolvedValue(
        new Response(JSON.stringify({ id: '123' }), { status: 200 }),
      );
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  describe('validação de input', () => {
    it('retorna 400 se o email estiver ausente', async () => {
      mockMaybeSingle.mockResolvedValue({ data: null, error: null });
      const res = await handler(makeRequest({}), mockContext);
      expect(res.status).toBe(400);
      const body = await res.json();
      expect(body.error).toBe('invalid_email');
    });

    it('retorna 400 se o email for inválido', async () => {
      const res = await handler(
        makeRequest({ email: 'nao-e-email' }),
        mockContext,
      );
      expect(res.status).toBe(400);
      const body = await res.json();
      expect(body.error).toBe('invalid_email');
    });

    it('retorna 400 se o body não for JSON válido', async () => {
      const req = new Request('https://test.com/.netlify/functions/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: 'nao-e-json{',
      });
      const res = await handler(req, mockContext);
      expect(res.status).toBe(400);
      const body = await res.json();
      expect(body.error).toBe('invalid_json');
    });
  });

  describe('novo subscriber', () => {
    it('retorna 200 com created:true e chama Supabase insert + MailerLite', async () => {
      mockMaybeSingle.mockResolvedValue({ data: null, error: null });
      mockInsert.mockResolvedValue({ error: null });

      const res = await handler(
        makeRequest({ email: 'novo@example.com', source: 'blog' }),
        mockContext,
      );

      expect(res.status).toBe(200);
      const body = await res.json();
      expect(body.ok).toBe(true);
      expect(body.created).toBe(true);
      expect(body.status).toBe('pending');

      expect(mockInsert).toHaveBeenCalledWith(
        expect.objectContaining({
          email: 'novo@example.com',
          status: 'pending',
          consent_ip: '127.0.0.1',
          consent_user_agent: 'jest-test',
        }),
      );

      expect(globalThis.fetch).toHaveBeenCalledWith(
        expect.stringContaining('/subscribers'),
        expect.objectContaining({ method: 'POST' }),
      );
    });

    it('normaliza o email para lowercase', async () => {
      mockMaybeSingle.mockResolvedValue({ data: null, error: null });
      mockInsert.mockResolvedValue({ error: null });

      await handler(makeRequest({ email: 'TESTE@EXAMPLE.COM' }), mockContext);

      expect(mockInsert).toHaveBeenCalledWith(
        expect.objectContaining({ email: 'teste@example.com' }),
      );
    });
  });

  describe('subscriber já existente', () => {
    it('retorna 200 com already:true se já estiver confirmado', async () => {
      mockMaybeSingle.mockResolvedValue({
        data: { email: 'existente@example.com', status: 'confirmed' },
        error: null,
      });
      mockUpdateEq.mockResolvedValue({ error: null });

      const res = await handler(
        makeRequest({ email: 'existente@example.com' }),
        mockContext,
      );

      expect(res.status).toBe(200);
      const body = await res.json();
      expect(body.already).toBe(true);
      expect(body.status).toBe('confirmed');
    });

    it('retorna 200 com already:true se já estiver pendente', async () => {
      mockMaybeSingle.mockResolvedValue({
        data: { email: 'pendente@example.com', status: 'pending' },
        error: null,
      });

      const res = await handler(
        makeRequest({ email: 'pendente@example.com' }),
        mockContext,
      );

      expect(res.status).toBe(200);
      const body = await res.json();
      expect(body.already).toBe(true);
      expect(body.status).toBe('pending');
      expect(mockInsert).not.toHaveBeenCalled();
    });
  });

  describe('erros de infraestrutura', () => {
    it('retorna 500 se o Supabase insert falhar', async () => {
      mockMaybeSingle.mockResolvedValue({ data: null, error: null });
      mockInsert.mockResolvedValue({ error: { message: 'db error' } });

      const res = await handler(
        makeRequest({ email: 'erro@example.com' }),
        mockContext,
      );

      expect(res.status).toBe(500);
      const body = await res.json();
      expect(body.error).toBe('db_insert_error');
    });

    it('retorna 200 mesmo se o MailerLite falhar (degradação graciosa)', async () => {
      mockMaybeSingle.mockResolvedValue({ data: null, error: null });
      mockInsert.mockResolvedValue({ error: null });
      jest
        .spyOn(globalThis, 'fetch')
        .mockResolvedValue(
          new Response('Internal Server Error', { status: 500 }),
        );

      const res = await handler(
        makeRequest({ email: 'degradacao@example.com' }),
        mockContext,
      );

      expect(res.status).toBe(200);
      const body = await res.json();
      expect(body.ok).toBe(true);
    });

    it('retorna 500 se as variáveis de ambiente estiverem em falta', async () => {
      const originalUrl = process.env.SUPABASE_URL;
      delete process.env.SUPABASE_URL;

      const res = await handler(
        makeRequest({ email: 'test@example.com' }),
        mockContext,
      );

      expect(res.status).toBe(500);
      const body = await res.json();
      expect(body.error).toBe('configuration_error');

      process.env.SUPABASE_URL = originalUrl;
    });
  });
});
