import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

jest.mock('gatsby', () => ({
  useStaticQuery: () => ({
    site: {
      siteMetadata: {
        title: 'Marcus Gonçalves',
        description: 'Site description',
        author: '@marquinhusgonc',
        siteUrl: 'https://www.marquinhusgoncalves.com',
      },
    },
  }),
  graphql: jest.fn(),
}));

jest.mock('../components/SchemaOrg', () => () => null);

import SEO from '../components/Seo';

const siteUrl = 'https://www.marquinhusgoncalves.com';

describe('SEO', () => {
  it('renders og:title with the provided title', () => {
    const { container } = render(<SEO title="Meu Post" url={`${siteUrl}/blog/meu-post/`} />);
    const ogTitle = container.querySelector('meta[property="og:title"]');
    expect(ogTitle).toHaveAttribute('content', 'Meu Post');
  });

  it('sets og:locale to pt_BR for PT pages', () => {
    const { container } = render(<SEO title="Post" url={`${siteUrl}/blog/post/`} />);
    const ogLocale = container.querySelector('meta[property="og:locale"]');
    expect(ogLocale).toHaveAttribute('content', 'pt_BR');
  });

  it('sets og:locale to en_US for EN pages', () => {
    const { container } = render(<SEO title="Post" url={`${siteUrl}/en/blog/post/`} />);
    const ogLocale = container.querySelector('meta[property="og:locale"]');
    expect(ogLocale).toHaveAttribute('content', 'en_US');
  });

  it('renders hreflang alternate links', () => {
    const { container } = render(<SEO title="Post" url={`${siteUrl}/blog/post/`} />);
    const hreflangPt = container.querySelector('link[hreflang="pt-BR"]');
    const hreflangEn = container.querySelector('link[hreflang="en"]');
    const hreflangDefault = container.querySelector('link[hreflang="x-default"]');
    expect(hreflangPt).toBeInTheDocument();
    expect(hreflangEn).toBeInTheDocument();
    expect(hreflangDefault).toBeInTheDocument();
  });
});
