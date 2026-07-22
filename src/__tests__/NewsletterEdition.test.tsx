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
jest.mock(
  '../components/Titles',
  () =>
    function MockTitles({ title }: { title: string }) {
      return <h1>{title}</h1>;
    },
);
jest.mock(
  '../components/PostInfo',
  () =>
    function MockPostInfo() {
      return <div data-testid="post-info" />;
    },
);
jest.mock(
  '../components/ShareButtons',
  () =>
    function MockShareButtons({ description }: { description: string }) {
      return <div data-testid="share-buttons">{description}</div>;
    },
);
jest.mock(
  '../components/NewsletterSignup',
  () =>
    function MockNewsletterSignup() {
      return <div data-testid="newsletter-signup" />;
    },
);

// Real react-i18next is replaced everywhere by a shallow key-echoing mock
// (see __mocks__/react-i18next.tsx), which can't prove translated *content*
// actually changes with the language. This local mock reads the real locale
// JSON so the share-description assertions below verify actual PT/EN output,
// not just that some translation key was referenced.
jest.mock('react-i18next', () => {
  // Factory is evaluated lazily by Jest, before the module's own imports run.
  /* eslint-disable @typescript-eslint/no-require-imports */
  const pt = require('../locales/pt/translation.json');
  const en = require('../locales/en/translation.json');
  /* eslint-enable @typescript-eslint/no-require-imports */
  const resources: Record<string, unknown> = { pt, en };
  let language = 'pt';

  const getByPath = (obj: unknown, keyPath: string): unknown =>
    keyPath
      .split('.')
      .reduce(
        (acc: unknown, key) =>
          acc && typeof acc === 'object'
            ? (acc as Record<string, unknown>)[key]
            : undefined,
        obj,
      );

  const interpolate = (template: string, values?: Record<string, string>) =>
    values
      ? Object.entries(values).reduce(
          (str, [key, value]) => str.split(`{{${key}}}`).join(value),
          template,
        )
      : template;

  return {
    __setLanguage: (lng: string) => {
      language = lng;
    },
    useTranslation: () => ({
      t: (key: string, options?: Record<string, string>) => {
        const template = getByPath(resources[language], key);
        return typeof template === 'string'
          ? interpolate(template, options)
          : key;
      },
      i18n: {
        get language() {
          return language;
        },
        changeLanguage: jest.fn((lng: string) => {
          language = lng;
          return Promise.resolve();
        }),
      },
    }),
  };
});

import ptTranslation from '../locales/pt/translation.json';
import enTranslation from '../locales/en/translation.json';
import NewsletterEdition from '../templates/newsletter';

const { __setLanguage } = jest.requireMock('react-i18next') as {
  __setLanguage: (lng: string) => void;
};

const baseData = {
  markdownRemark: {
    frontmatter: {
      title: 'Edition #01 — Title',
      date: 'June 27, 2026',
      description: 'Edition description.',
      subject: 'Email subject line',
    },
    timeToRead: 3,
    html: '<p>Edition content</p>',
  },
};

type TestProps = { data: typeof baseData; pageContext: typeof baseContext };
const TestEdition = NewsletterEdition as React.FC<TestProps>;

const baseContext = {
  slug: '/edicao-01/',
  language: 'pt',
  collectionBase: '/newsletter',
};

function renderTemplate(data = baseData, context = baseContext) {
  return render(<TestEdition data={data} pageContext={context} />);
}

describe('NewsletterEdition template', () => {
  beforeEach(() => {
    __setLanguage('pt');
  });

  it('renders the edition title', () => {
    renderTemplate();
    expect(screen.getByRole('heading')).toHaveTextContent(
      'Edition #01 — Title',
    );
  });

  it('renders the subject label when subject is provided', () => {
    renderTemplate();
    expect(screen.getByText('Email subject line')).toBeInTheDocument();
  });

  it('does not render subject label when subject is empty', () => {
    const dataWithoutSubject = {
      ...baseData,
      markdownRemark: {
        ...baseData.markdownRemark,
        frontmatter: { ...baseData.markdownRemark.frontmatter, subject: '' },
      },
    };
    renderTemplate(dataWithoutSubject);
    expect(screen.queryByText('Email subject line')).not.toBeInTheDocument();
  });

  it('renders the HTML content', () => {
    renderTemplate();
    expect(screen.getByText('Edition content')).toBeInTheDocument();
  });

  it('renders PostInfo, ShareButtons and NewsletterSignup', () => {
    renderTemplate();
    expect(screen.getByTestId('post-info')).toBeInTheDocument();
    expect(screen.getByTestId('share-buttons')).toBeInTheDocument();
    expect(screen.getByTestId('newsletter-signup')).toBeInTheDocument();
  });

  it('shares a Portuguese description built from the real PT locale content', () => {
    renderTemplate(baseData, { ...baseContext, language: 'pt' });
    const expected =
      ptTranslation.pages.newsletter.edition.shareDescription.replace(
        '{{title}}',
        baseData.markdownRemark.frontmatter.title,
      );
    expect(screen.getByTestId('share-buttons')).toHaveTextContent(expected);
  });

  it('shares an English description built from the real EN locale content, not the PT one', () => {
    __setLanguage('en');
    renderTemplate(baseData, { ...baseContext, language: 'en' });
    const expected =
      enTranslation.pages.newsletter.edition.shareDescription.replace(
        '{{title}}',
        baseData.markdownRemark.frontmatter.title,
      );
    const shareButtons = screen.getByTestId('share-buttons');
    expect(shareButtons).toHaveTextContent(expected);
    expect(shareButtons).not.toHaveTextContent(
      ptTranslation.pages.newsletter.edition.shareDescription.replace(
        '{{title}}',
        baseData.markdownRemark.frontmatter.title,
      ),
    );
  });
});
