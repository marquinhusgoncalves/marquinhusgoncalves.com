import styled from 'styled-components';
import { Link } from 'gatsby';

export const TagCloudContainer = styled.div`
  margin: 2rem 0;
  padding: 2rem;
  background: #f8f9fa;
  border-radius: 8px;
  text-align: center;
`;

export const TagCloudTitle = styled.h3`
  margin-bottom: 1.5rem;
  color: #333;
  font-size: 1.5rem;
`;

export const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;
`;

export const TagItem = styled.span`
  display: inline-block;
`;

export const TagLink = styled(Link)`
  display: inline-block;
  padding: 0.5rem 1rem;
  background: #25aae1;
  color: white !important;
  text-decoration: none;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: #1e8bc3;
    color: white !important;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(37, 170, 225, 0.3);
  }

  &:visited {
    color: white !important;
  }
`;

export const TagCount = styled.span`
  opacity: 0.8;
  font-size: 0.8rem;
`;
