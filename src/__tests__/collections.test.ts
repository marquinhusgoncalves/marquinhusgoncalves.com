import { getCollectionConfig, getFullSlug } from '../utils/collections';

describe('getCollectionConfig', () => {
  it.each([
    ['posts', '/blog', 'Blog'],
    ['projects', '/projetos', 'Projetos'],
    ['dicas', '/dicas', 'Dicas'],
    ['viagens', '/viagens', 'Viagens'],
    ['newsletter', '/newsletter', 'Newsletter'],
  ])(
    'returns correct path and name for %s',
    (collection, expectedPath, expectedName) => {
      const config = getCollectionConfig(collection);
      expect(config.path).toBe(expectedPath);
      expect(config.name).toBe(expectedName);
    },
  );

  it('returns correct singular and plural for newsletter', () => {
    const config = getCollectionConfig('newsletter');
    expect(config.singular).toBe('edição');
    expect(config.plural).toBe('edições');
  });

  it('returns fallback config for unknown collection', () => {
    const config = getCollectionConfig('desconhecida');
    expect(config.path).toBe('/desconhecida');
    expect(config.name).toBe('Desconhecida');
    expect(config.plural).toBe('desconhecida');
  });
});

describe('getFullSlug', () => {
  it('builds correct slug for newsletter', () => {
    expect(getFullSlug('newsletter', '/edicao-01/')).toBe(
      '/newsletter/edicao-01/',
    );
  });

  it('builds correct slug for blog (posts)', () => {
    expect(getFullSlug('posts', '/my-post/')).toBe('/blog/my-post/');
  });

  it('builds correct slug for viagens', () => {
    expect(getFullSlug('viagens', '/new-york/')).toBe('/viagens/new-york/');
  });
});
