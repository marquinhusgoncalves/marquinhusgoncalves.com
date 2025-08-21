import React, { useState, useRef, useEffect, useMemo } from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Fuse from 'fuse.js';
import * as S from './styled';

interface SearchResult {
  id: string;
  title: string;
  description: string;
  tags: string[];
  date: string;
  slug: string;
  collection: string;
  excerpt: string;
  url: string;
}

const Search: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [selectedCollection, setSelectedCollection] = useState<string>('all');
  const searchRef = useRef<HTMLDivElement>(null);

  const { allMarkdownRemark } = useStaticQuery(graphql`
    query SearchQuery {
      allMarkdownRemark {
        nodes {
          id
          frontmatter {
            title
            description
            tags
            date
          }
          fields {
            slug
            collection
          }
          excerpt
        }
      }
    }
  `);

  const searchData = useMemo(() => {
    return allMarkdownRemark.nodes.map((node: any) => ({
      id: node.id,
      title: node.frontmatter.title,
      description: node.frontmatter.description || '',
      tags: node.frontmatter.tags || [],
      date: node.frontmatter.date,
      slug: node.fields.slug,
      collection: node.fields.collection,
      excerpt: node.excerpt,
      url: `/${node.fields.collection === 'posts' ? 'blog' : node.fields.collection}${node.fields.slug}`,
    }));
  }, [allMarkdownRemark.nodes]);

  const fuse = useMemo(() => {
    return new Fuse(searchData, {
      keys: ['title', 'description', 'tags', 'excerpt'],
      threshold: 0.3,
      includeScore: true,
      minMatchCharLength: 2,
    });
  }, [searchData]);

  const [results, setResults] = useState<SearchResult[]>([]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
        setQuery('');
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  const handleSearch = (searchQuery: string) => {
    setQuery(searchQuery);

    if (searchQuery.trim().length < 2) {
      setResults([]);
      return;
    }

    const searchResults = fuse.search(searchQuery);
    let filteredResults = searchResults.map(
      (result) => result.item,
    ) as SearchResult[];

    if (selectedCollection !== 'all') {
      filteredResults = filteredResults.filter(
        (result: SearchResult) => result.collection === selectedCollection,
      );
    }

    setResults(filteredResults);
  };

  const handleToggleSearch = () => {
    setIsOpen(!isOpen);
  };

  const getCollectionName = (collection: string) => {
    const collectionNames: Record<string, string> = {
      posts: 'Blog',
      projects: 'Projetos',
      dicas: 'Dicas',
      viagens: 'Viagens',
    };
    return collectionNames[collection] || collection;
  };

  const getCollectionPath = (collection: string) => {
    const collectionPaths: Record<string, string> = {
      posts: '/blog',
      projects: '/projetos',
      dicas: '/dicas',
      viagens: '/viagens',
    };
    return collectionPaths[collection] || `/${collection}`;
  };

  const formatDate = (dateString: string) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const highlightText = (text: string, query: string) => {
    if (!query.trim()) return text;

    const regex = new RegExp(`(${query})`, 'gi');
    return text.replace(regex, '<mark>$1</mark>');
  };

  return (
    <S.SearchContainer ref={searchRef}>
      <S.SearchButton
        onClick={handleToggleSearch}
        aria-label="Abrir busca"
        type="button"
        className={isOpen ? 'active' : ''}
      >
        <S.SearchIcon />
      </S.SearchButton>

      {isOpen && (
        <S.SearchOverlay className="open">
          <S.SearchBar>
            <S.SearchInput
              type="text"
              placeholder="Buscar posts, projetos, dicas..."
              value={query}
              onChange={(e) => handleSearch(e.target.value)}
              autoFocus
            />
            <S.CloseButton
              onClick={() => setIsOpen(false)}
              aria-label="Fechar busca"
              type="button"
            >
              ✕
            </S.CloseButton>
          </S.SearchBar>

          <S.CollectionFilters>
            <S.FilterButton
              active={selectedCollection === 'all'}
              onClick={() => setSelectedCollection('all')}
            >
              Todos
            </S.FilterButton>
            <S.FilterButton
              active={selectedCollection === 'posts'}
              onClick={() => setSelectedCollection('posts')}
            >
              Blog
            </S.FilterButton>
            <S.FilterButton
              active={selectedCollection === 'projects'}
              onClick={() => setSelectedCollection('projects')}
            >
              Projetos
            </S.FilterButton>
            <S.FilterButton
              active={selectedCollection === 'dicas'}
              onClick={() => setSelectedCollection('dicas')}
            >
              Dicas
            </S.FilterButton>
            <S.FilterButton
              active={selectedCollection === 'viagens'}
              onClick={() => setSelectedCollection('viagens')}
            >
              Viagens
            </S.FilterButton>
          </S.CollectionFilters>

          <S.SearchResults>
            {query.trim().length < 2 ? (
              <S.EmptyState>
                Digite pelo menos 2 caracteres para buscar...
              </S.EmptyState>
            ) : results.length === 0 ? (
              <S.EmptyState>
                Nenhum resultado encontrado para "{query}"
              </S.EmptyState>
            ) : (
              <>
                <S.ResultsCount>
                  {results.length} resultado{results.length !== 1 ? 's' : ''}{' '}
                  encontrado{results.length !== 1 ? 's' : ''}
                </S.ResultsCount>
                {results.map((result) => (
                  <S.ResultItem key={result.id}>
                    <S.ResultHeader>
                      <S.ResultTitle>
                        <Link to={result.url}>
                          <span
                            dangerouslySetInnerHTML={{
                              __html: highlightText(result.title, query),
                            }}
                          />
                        </Link>
                      </S.ResultTitle>
                      <S.ResultMeta>
                        <S.CollectionTag collection={result.collection}>
                          {getCollectionName(result.collection)}
                        </S.CollectionTag>
                        {result.date && (
                          <S.ResultDate>{formatDate(result.date)}</S.ResultDate>
                        )}
                      </S.ResultMeta>
                    </S.ResultHeader>

                    {result.description && (
                      <S.ResultDescription>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: highlightText(result.description, query),
                          }}
                        />
                      </S.ResultDescription>
                    )}

                    {result.tags && result.tags.length > 0 && (
                      <S.ResultTags>
                        {result.tags.slice(0, 3).map((tag) => (
                          <S.Tag key={tag}>
                            <Link
                              to={`${getCollectionPath(result.collection)}/tags/${tag}`}
                            >
                              {tag}
                            </Link>
                          </S.Tag>
                        ))}
                        {result.tags.length > 3 && (
                          <S.MoreTags>+{result.tags.length - 3}</S.MoreTags>
                        )}
                      </S.ResultTags>
                    )}
                  </S.ResultItem>
                ))}
              </>
            )}
          </S.SearchResults>
        </S.SearchOverlay>
      )}
    </S.SearchContainer>
  );
};

export default Search;
