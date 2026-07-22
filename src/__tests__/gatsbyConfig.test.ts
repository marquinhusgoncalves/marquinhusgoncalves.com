import config from '../../gatsby-config';

type SitemapSerialize = (input: { path: string }) => {
  url: string;
  priority: number;
  changefreq: string;
};

function getSitemapSerialize(): SitemapSerialize {
  const plugins = config.plugins as Array<{
    resolve?: string;
    options?: { serialize?: SitemapSerialize };
  }>;
  const sitemapPlugin = plugins.find(
    (plugin) => plugin?.resolve === 'gatsby-plugin-sitemap',
  );

  if (!sitemapPlugin?.options?.serialize) {
    throw new Error('gatsby-plugin-sitemap serialize function not found');
  }

  return sitemapPlugin.options.serialize;
}

describe('sitemap priority', () => {
  const serialize = getSitemapSerialize();

  it.each([
    ['/', 1.0],
    ['/en', 1.0],
    ['/en/', 1.0],
    ['/blog', 0.8],
    ['/en/blog', 0.8],
    ['/newsletter', 0.8],
    ['/en/newsletter', 0.8],
    ['/blog/my-post/', 0.7],
    ['/en/blog/my-post/', 0.7],
    ['/viagens/my-trip/', 0.7],
    ['/en/viagens/my-trip/', 0.7],
    ['/dicas/my-tip/', 0.7],
    ['/en/dicas/my-tip/', 0.7],
    ['/newsletter/edicao-01/', 0.6],
    ['/en/newsletter/edicao-01/', 0.6],
    // Real tag pages are nested under their collection (e.g. /blog/tags/react/)
    // and are matched by the collection rule above (0.7) before this one —
    // a bare /tags/... path is not currently generated anywhere in the site,
    // but the rule must still stay language-agnostic if that ever changes.
    ['/blog/tags/react/', 0.7],
    ['/en/blog/tags/react/', 0.7],
    ['/tags/react/', 0.4],
    ['/en/tags/react/', 0.4],
  ])('gives %s a priority of %s', (path, expectedPriority) => {
    expect(serialize({ path }).priority).toBe(expectedPriority);
  });

  it('gives PT and EN versions of the same page the same priority', () => {
    const cases = [
      '/blog/my-post/',
      '/viagens/my-trip/',
      '/newsletter/edicao-01/',
      '/dicas/my-tip/',
    ];

    cases.forEach((ptPath) => {
      const enPath = `/en${ptPath}`;
      expect(serialize({ path: enPath }).priority).toBe(
        serialize({ path: ptPath }).priority,
      );
    });
  });
});
