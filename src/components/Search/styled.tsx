import styled from 'styled-components';
import { Search as SearchIconSvg } from '@styled-icons/boxicons-regular/Search';

export const SearchContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export const SearchButton = styled.button`
  background: var(--color-overlay);
  border: 1px solid var(--color-overlay);
  cursor: pointer;
  padding: 8px;
  border-radius: 50%;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-white);
  opacity: 0.8;
  min-width: 36px;
  min-height: 36px;

  &:hover {
    opacity: 1;
    transform: scale(1.05);
    background-color: var(--color-overlay-heavy);
    border-color: var(--color-overlay-heavy);
  }

  &.active {
    opacity: 1;
    background-color: var(--color-overlay-heavy);
    border-color: var(--color-overlay-heavy);
  }
`;

export const SearchIcon = styled(SearchIconSvg)`
  width: 16px;
  height: 16px;
  color: inherit;
  line-height: 1;
`;

export const SearchOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--color-overlay-heavy);
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  backdrop-filter: blur(10px);
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;

  &.open {
    opacity: 1;
    visibility: visible;
  }
`;

export const SearchBar = styled.div`
  width: 100%;
  max-width: 600px;
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 30px;
  background: var(--color-background);
  border-radius: 50px;
  padding: 5px;
  box-shadow: var(--shadow-heavy);
  border: 1px solid var(--color-border);
`;

export const SearchHeader = styled.div`
  width: 100%;
  max-width: 800px;
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;
`;

export const SearchInput = styled.input`
  flex: 1;
  padding: 15px 20px;
  font-size: 18px;
  border: none;
  border-radius: 45px;
  background: var(--color-background);
  color: var(--color-text);
  box-shadow: var(--shadow-medium);
  outline: none;
  transition: box-shadow 0.3s ease;

  &::placeholder {
    color: var(--color-text-muted);
  }

  &:focus {
    box-shadow: 0 4px 25px var(--color-primary);
  }
`;

export const CloseButton = styled.button`
  background: var(--color-danger);
  color: var(--color-white);
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  cursor: pointer;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s ease;

  &:hover {
    background: var(--color-danger);
    filter: brightness(0.9);
  }
`;

export const CollectionFilters = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
  flex-wrap: wrap;
  justify-content: center;
`;

export const FilterButton = styled.button<{ active: boolean }>`
  padding: 8px 16px;
  border: 2px solid
    ${(props) =>
      props.active ? 'var(--color-primary)' : 'var(--color-border)'};
  background: ${(props) =>
    props.active ? 'var(--color-primary)' : 'var(--color-background)'};
  color: ${(props) =>
    props.active ? 'var(--color-white)' : 'var(--color-text)'};
  border-radius: 25px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.2s ease;

  &:hover {
    border-color: var(--color-primary);
    background: ${(props) =>
      props.active
        ? 'var(--color-primary-dark)'
        : 'var(--color-background-secondary)'};
  }
`;

export const SearchResults = styled.div`
  width: 100%;
  max-width: 800px;
  max-height: 60vh;
  overflow-y: auto;
  background: var(--color-background);
  border-radius: 15px;
  box-shadow: var(--shadow-heavy);
  padding: 20px;
  border: 1px solid var(--color-border);
`;

export const EmptyState = styled.div`
  text-align: center;
  padding: 40px 20px;
  color: var(--color-text-secondary);
  font-size: 16px;
`;

export const ResultsCount = styled.div`
  font-size: 14px;
  color: var(--color-text-secondary);
  margin-bottom: 20px;
  padding-bottom: 15px;
  border-bottom: 1px solid var(--color-border);
`;

export const ResultItem = styled.div`
  padding: 20px;
  border: 1px solid var(--color-border);
  border-radius: 10px;
  margin-bottom: 15px;
  transition: all 0.2s ease;

  &:hover {
    border-color: var(--color-primary);
    box-shadow: 0 4px 15px var(--color-primary);
    transform: translateY(-2px);
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

export const ResultHeader = styled.div`
  margin-bottom: 10px;
`;

export const ResultTitle = styled.h3`
  margin: 0 0 8px 0;
  font-size: 18px;
  font-weight: 600;
  color: var(--color-text);

  a {
    color: var(--color-primary);
    text-decoration: none;
    transition: color 0.2s ease;

    &:hover {
      color: var(--color-primary-dark);
    }
  }

  mark {
    background: var(--color-accent);
    color: var(--color-text);
    padding: 2px 4px;
    border-radius: 3px;
  }
`;

export const ResultMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  flex-wrap: wrap;
`;

export const CollectionTag = styled.span<{ collection: string }>`
  padding: 4px 12px;
  border-radius: 15px;
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;

  background: ${(props) => {
    switch (props.collection) {
      case 'posts':
        return 'var(--color-info)';
      case 'projects':
        return 'var(--color-success)';
      case 'dicas':
        return 'var(--color-warning)';
      case 'viagens':
        return 'var(--color-accent)';
      default:
        return 'var(--color-background-secondary)';
    }
  }};

  color: var(--color-white);
`;

export const ResultDate = styled.span`
  font-size: 12px;
  color: var(--color-text-muted);
`;

export const ResultDescription = styled.p`
  margin: 10px 0;
  color: var(--color-text-secondary);
  line-height: 1.5;
  font-size: 14px;

  mark {
    background: var(--color-accent);
    color: var(--color-text);
    padding: 2px 4px;
    border-radius: 3px;
  }
`;

export const ResultTags = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-top: 10px;
`;

export const Tag = styled.span`
  a {
    display: inline-block;
    padding: 4px 8px;
    background: var(--color-background-secondary);
    color: var(--color-primary);
    text-decoration: none;
    border-radius: 12px;
    font-size: 11px;
    font-weight: 500;
    transition: all 0.2s ease;

    &:hover {
      background: var(--color-primary);
      color: var(--color-white);
      transform: translateY(-1px);
    }
  }
`;

export const MoreTags = styled.span`
  padding: 4px 8px;
  background: var(--color-background-secondary);
  color: var(--color-text-muted);
  border-radius: 12px;
  font-size: 11px;
  font-weight: 500;
`;

// Responsividade
export const SearchOverlayResponsive = styled(SearchOverlay)`
  @media (max-width: 768px) {
    padding: 15px;
  }
`;

export const SearchInputResponsive = styled(SearchInput)`
  @media (max-width: 768px) {
    font-size: 16px;
    padding: 12px 16px;
  }
`;

export const CollectionFiltersResponsive = styled(CollectionFilters)`
  @media (max-width: 768px) {
    gap: 8px;
  }
`;

export const FilterButtonResponsive = styled(FilterButton)`
  @media (max-width: 768px) {
    padding: 6px 12px;
    font-size: 12px;
  }
`;

export const SearchResultsResponsive = styled(SearchResults)`
  @media (max-width: 768px) {
    max-height: 50vh;
    padding: 15px;
  }
`;

export const ResultItemResponsive = styled(ResultItem)`
  @media (max-width: 768px) {
    padding: 15px;
  }
`;
