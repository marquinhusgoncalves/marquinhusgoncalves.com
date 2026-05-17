import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';

const mockSubscribe = jest.fn();
const mockTrackEvent = jest.fn();

jest.mock('../services/newsletter', () => ({
  newsletterService: {
    subscribe: (...args: unknown[]) => mockSubscribe(...args),
    getSourceFromPath: jest.fn(() => 'home'),
    getTagsFromContext: jest.fn(() => []),
  },
  NewsletterError: class NewsletterError extends Error {
    code: string;
    constructor(message: string, code: string) {
      super(message);
      this.code = code;
    }
  },
}));

jest.mock('../utils/analytics', () => ({
  trackEvent: (...args: unknown[]) => mockTrackEvent(...args),
}));

import NewsletterSignup from '../components/NewsletterSignup';

describe('NewsletterSignup', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders email input', () => {
    render(<NewsletterSignup />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('does not call subscribe when email is empty', async () => {
    render(<NewsletterSignup />);
    fireEvent.click(screen.getByRole('button'));
    await waitFor(() => {
      expect(mockSubscribe).not.toHaveBeenCalled();
    });
  });

  it('calls trackEvent with newsletter_signup on successful subscription', async () => {
    mockSubscribe.mockResolvedValueOnce({ ok: true });
    render(<NewsletterSignup />);

    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'test@example.com' },
    });
    fireEvent.click(screen.getByRole('checkbox'));
    fireEvent.click(screen.getByRole('button'));

    await waitFor(() => {
      expect(mockTrackEvent).toHaveBeenCalledWith(
        'newsletter_signup',
        expect.objectContaining({ variant: 'home' }),
      );
    });
  });
});
