import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

jest.mock(
  '../components/Layout',
  () =>
    function MockLayout({ children }: { children: React.ReactNode }) {
      return <div>{children}</div>;
    },
);
jest.mock('../components/Seo', () => () => null);
jest.mock(
  '../components/NewsletterSignup',
  () =>
    function MockNewsletterSignup() {
      return <div data-testid="newsletter-signup" />;
    },
);
jest.mock(
  '../components/Card',
  () =>
    function MockCard({ title, slug }: { title: string; slug: string }) {
      return <a href={slug}>{title}</a>;
    },
);

import Newsletter from '../pages/newsletter';

const mockEditions = [
  {
    node: {
      timeToRead: 3,
      fields: { slug: '/edicao-01/' },
      frontmatter: {
        title: 'Edition #01 — Title',
        description: 'First edition description.',
      },
    },
  },
];

type TestData = { allMarkdownRemark: { edges: typeof mockEditions } };
type TestProps = { data: TestData; pageContext: typeof baseContext };
const TestNewsletter = Newsletter as React.FC<TestProps>;

const baseContext = { language: 'pt' };

function renderPage(edges: typeof mockEditions = [], context = baseContext) {
  return render(
    <TestNewsletter
      data={{ allMarkdownRemark: { edges } }}
      pageContext={context}
    />,
  );
}

describe('Newsletter page', () => {
  it('renders the signup form', () => {
    renderPage();
    expect(screen.getByTestId('newsletter-signup')).toBeInTheDocument();
  });

  it('renders the empty state when there are no editions', () => {
    renderPage([]);
    expect(
      screen.getByText('pages.newsletter.editions.title'),
    ).toBeInTheDocument();
    expect(
      screen.getByText('pages.newsletter.editions.empty'),
    ).toBeInTheDocument();
  });

  it('renders editions section when editions exist', () => {
    renderPage(mockEditions);
    expect(
      screen.getByText('pages.newsletter.editions.title'),
    ).toBeInTheDocument();
  });

  it('renders each edition title', () => {
    renderPage(mockEditions);
    expect(screen.getByText('Edition #01 — Title')).toBeInTheDocument();
  });

  it('builds the correct slug for each edition link in PT', () => {
    renderPage(mockEditions, { language: 'pt' });
    const link = screen.getByRole('link', { name: 'Edition #01 — Title' });
    expect(link).toHaveAttribute('href', '/newsletter/edicao-01/');
  });

  it('builds the correct slug for each edition link in EN', () => {
    renderPage(mockEditions, { language: 'en' });
    const link = screen.getByRole('link', { name: 'Edition #01 — Title' });
    expect(link).toHaveAttribute('href', '/en/newsletter/edicao-01/');
  });

  it('renders multiple editions', () => {
    const multipleEditions = [
      ...mockEditions,
      {
        node: {
          timeToRead: 5,
          fields: { slug: '/edicao-02/' },
          frontmatter: {
            title: 'Edition #02 — Second',
            description: 'Second edition description.',
          },
        },
      },
    ];
    renderPage(multipleEditions);
    expect(screen.getAllByRole('link')).toHaveLength(2);
  });
});
