import styled from 'styled-components';

export const SearchContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export const SearchButton = styled.button`
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  cursor: pointer;
  padding: 8px;
  border-radius: 50%;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  opacity: 0.8;
  min-width: 36px;
  min-height: 36px;

  &:hover {
    opacity: 1;
    transform: scale(1.05);
    background-color: rgba(255, 255, 255, 0.2);
    border-color: rgba(255, 255, 255, 0.4);
  }

  &:focus {
    outline: 2px solid rgba(255, 255, 255, 0.5);
    outline-offset: 2px;
  }

  &.active {
    opacity: 1;
    background-color: rgba(255, 255, 255, 0.3);
    border-color: rgba(255, 255, 255, 0.6);
  }
`;

export const SearchIcon = styled.span`
  font-size: 16px;
  color: inherit;
  line-height: 1;
`;

export const SearchOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
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
  background: white;
  border-radius: 50px;
  padding: 5px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
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
  background: white;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  outline: none;
  transition: box-shadow 0.3s ease;

  &::placeholder {
    color: #999;
  }

  &:focus {
    box-shadow: 0 4px 25px rgba(37, 170, 225, 0.3);
  }
`;

export const CloseButton = styled.button`
  background: #ff4757;
  color: white;
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
    background: #ff3742;
  }

  &:focus {
    outline: 2px solid #ff4757;
    outline-offset: 2px;
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
  border: 2px solid ${(props) => (props.active ? '#25AAE1' : '#ddd')};
  background: ${(props) => (props.active ? '#25AAE1' : 'white')};
  color: ${(props) => (props.active ? 'white' : '#333')};
  border-radius: 25px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.2s ease;

  &:hover {
    border-color: #25aae1;
    background: ${(props) => (props.active ? '#1e8bc3' : '#f8f9fa')};
  }

  &:focus {
    outline: 2px solid #25aae1;
    outline-offset: 2px;
  }
`;

export const SearchResults = styled.div`
  width: 100%;
  max-width: 800px;
  max-height: 60vh;
  overflow-y: auto;
  background: white;
  border-radius: 15px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
  padding: 20px;
`;

export const EmptyState = styled.div`
  text-align: center;
  padding: 40px 20px;
  color: #666;
  font-size: 16px;
`;

export const ResultsCount = styled.div`
  font-size: 14px;
  color: #666;
  margin-bottom: 20px;
  padding-bottom: 15px;
  border-bottom: 1px solid #eee;
`;

export const ResultItem = styled.div`
  padding: 20px;
  border: 1px solid #eee;
  border-radius: 10px;
  margin-bottom: 15px;
  transition: all 0.2s ease;

  &:hover {
    border-color: #25aae1;
    box-shadow: 0 4px 15px rgba(37, 170, 225, 0.1);
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

  a {
    color: #25aae1;
    text-decoration: none;
    transition: color 0.2s ease;

    &:hover {
      color: #1e8bc3;
    }
  }

  mark {
    background: #fff3cd;
    color: #856404;
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
        return '#e3f2fd';
      case 'projects':
        return '#e8f5e8';
      case 'dicas':
        return '#fff3e0';
      case 'viagens':
        return '#f3e5f5';
      default:
        return '#f5f5f5';
    }
  }};

  color: ${(props) => {
    switch (props.collection) {
      case 'posts':
        return '#1976d2';
      case 'projects':
        return '#388e3c';
      case 'dicas':
        return '#f57c00';
      case 'viagens':
        return '#7b1fa2';
      default:
        return '#666';
    }
  }};
`;

export const ResultDate = styled.span`
  font-size: 12px;
  color: #999;
`;

export const ResultDescription = styled.p`
  margin: 10px 0;
  color: #555;
  line-height: 1.5;
  font-size: 14px;

  mark {
    background: #fff3cd;
    color: #856404;
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
    background: #f8f9fa;
    color: #25aae1;
    text-decoration: none;
    border-radius: 12px;
    font-size: 11px;
    font-weight: 500;
    transition: all 0.2s ease;

    &:hover {
      background: #25aae1;
      color: white;
      transform: translateY(-1px);
    }
  }
`;

export const MoreTags = styled.span`
  padding: 4px 8px;
  background: #f8f9fa;
  color: #999;
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
