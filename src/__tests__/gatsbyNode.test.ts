import { createPages } from '../../gatsby-node';

type MarkdownEdge = {
  node: {
    id: string;
    fields: { slug: string | null } | null;
    frontmatter: { title: string | null; tags?: string[] | null };
  };
};

type CreatedPage = { path: string };

function graphqlResponse(edges: MarkdownEdge[]) {
  return { data: { allMarkdownRemark: { edges } } };
}

async function runCreatePages(edgesByCollection: {
  posts: MarkdownEdge[];
  projects: MarkdownEdge[];
  viagens: MarkdownEdge[];
  newsletter: MarkdownEdge[];
}) {
  const createPage = jest.fn((_page: CreatedPage) => undefined);
  const responses = [
    edgesByCollection.posts,
    edgesByCollection.projects,
    edgesByCollection.viagens,
    edgesByCollection.newsletter,
  ].map(graphqlResponse);

  let call = 0;
  const graphql = jest.fn(async () => responses[call++]);

  const run = createPages as unknown as (args: {
    graphql: typeof graphql;
    actions: { createPage: typeof createPage };
  }) => Promise<void>;

  await run({ graphql, actions: { createPage } });

  return createPage;
}

const emptyCollections = {
  posts: [],
  projects: [],
  viagens: [],
  newsletter: [],
};

describe('createPages', () => {
  it('never creates a page whose path contains an unresolved slug', async () => {
    const brokenEdge: MarkdownEdge = {
      node: { id: 'broken', fields: null, frontmatter: { title: 'Broken' } },
    };

    const createPage = await runCreatePages({
      posts: [brokenEdge],
      projects: [brokenEdge],
      viagens: [brokenEdge],
      newsletter: [brokenEdge],
    });

    const paths = createPage.mock.calls.map(([page]) => page.path);
    expect(paths.some((p: string) => p.includes('undefined'))).toBe(false);
    expect(paths.some((p: string) => p.includes('null'))).toBe(false);
  });

  it('creates PT and EN pages for a newsletter edition with a valid slug', async () => {
    const edition: MarkdownEdge = {
      node: {
        id: 'edition-1',
        fields: { slug: '/edicao-01/' },
        frontmatter: { title: 'Edição 01' },
      },
    };

    const createPage = await runCreatePages({
      ...emptyCollections,
      newsletter: [edition],
    });

    const paths = createPage.mock.calls.map(([page]) => page.path);
    expect(paths).toContain('/newsletter/edicao-01/');
    expect(paths).toContain('/en/newsletter/edicao-01/');
  });

  it('does not create edition pages for a newsletter entry missing a slug', async () => {
    const brokenEdition: MarkdownEdge = {
      node: {
        id: 'edition-broken',
        fields: null,
        frontmatter: { title: 'Sem slug' },
      },
    };

    const createPage = await runCreatePages({
      ...emptyCollections,
      newsletter: [brokenEdition],
    });

    const paths = createPage.mock.calls.map(([page]) => page.path);
    const staticListingPaths = new Set(['/newsletter', '/en/newsletter']);
    const editionPaths = paths.filter(
      (p: string) => p.includes('newsletter') && !staticListingPaths.has(p),
    );
    expect(editionPaths).toEqual([]);
  });

  it('creates PT and EN pages for posts, projects and viagens with valid slugs', async () => {
    const makeEdge = (id: string, slug: string): MarkdownEdge => ({
      node: {
        id,
        fields: { slug },
        frontmatter: { title: id, tags: [] },
      },
    });

    const createPage = await runCreatePages({
      posts: [makeEdge('post-1', '/post-1/')],
      projects: [makeEdge('project-1', '/project-1/')],
      viagens: [makeEdge('trip-1', '/trip-1/')],
      newsletter: [],
    });

    const paths = createPage.mock.calls.map(([page]) => page.path);
    expect(paths).toEqual(
      expect.arrayContaining([
        '/blog/post-1/',
        '/en/blog/post-1/',
        '/projetos/project-1/',
        '/en/projetos/project-1/',
        '/viagens/trip-1/',
        '/en/viagens/trip-1/',
      ]),
    );
  });
});
