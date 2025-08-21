export interface CollectionConfig {
  path: string;
  name: string;
  singular: string;
  plural: string;
}

export const COLLECTIONS: Record<string, CollectionConfig> = {
  posts: {
    path: '/blog',
    name: 'Blog',
    singular: 'post',
    plural: 'posts',
  },
  projects: {
    path: '/projetos',
    name: 'Projetos',
    singular: 'projeto',
    plural: 'projetos',
  },
  dicas: {
    path: '/dicas',
    name: 'Dicas',
    singular: 'dica',
    plural: 'dicas',
  },
  viagens: {
    path: '/viagens',
    name: 'Viagens',
    singular: 'viagem',
    plural: 'viagens',
  },
};

export const getCollectionConfig = (collection: string): CollectionConfig => {
  return (
    COLLECTIONS[collection] || {
      path: `/${collection}`,
      name: collection.charAt(0).toUpperCase() + collection.slice(1),
      singular: collection.slice(0, -1),
      plural: collection,
    }
  );
};

export const getFullSlug = (collection: string, slug: string): string => {
  const config = getCollectionConfig(collection);
  return `${config.path}${slug}`;
};
