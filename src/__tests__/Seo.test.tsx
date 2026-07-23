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
  // React 19 auto-hoists <title>/<meta>/<link> rendered anywhere in the tree
  // into the real document.head, instead of leaving them inside the render
  // container — so assertions target document.head to match actual behavior.
  it('renders og:title with the provided title', () => {
    render(<SEO title="Meu Post" url={`${siteUrl}/blog/meu-post/`} />);
    const ogTitle = document.head.querySelector('meta[property="og:title"]');
    expect(ogTitle).toHaveAttribute('content', 'Meu Post');
  });

  it('sets og:locale to pt_BR for PT pages', () => {
    render(<SEO title="Post" url={`${siteUrl}/blog/post/`} />);
    const ogLocale = document.head.querySelector('meta[property="og:locale"]');
    expect(ogLocale).toHaveAttribute('content', 'pt_BR');
  });

  it('sets og:locale to en_US for EN pages', () => {
    render(<SEO title="Post" url={`${siteUrl}/en/blog/post/`} />);
    const ogLocale = document.head.querySelector('meta[property="og:locale"]');
    expect(ogLocale).toHaveAttribute('content', 'en_US');
  });

  it('renders hreflang alternate links', () => {
    render(<SEO title="Post" url={`${siteUrl}/blog/post/`} />);
    const hreflangPt = document.head.querySelector('link[hreflang="pt-BR"]');
    const hreflangEn = document.head.querySelector('link[hreflang="en"]');
    const hreflangDefault = document.head.querySelector(
      'link[hreflang="x-default"]',
    );
    expect(hreflangPt).toBeInTheDocument();
    expect(hreflangEn).toBeInTheDocument();
    expect(hreflangDefault).toBeInTheDocument();
  });
});
