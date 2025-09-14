import styled from 'styled-components';

interface NewsletterContainerProps {
  variant: 'home' | 'compact' | 'post-end' | 'list-end';
}

interface EmailInputProps {
  hasError: boolean;
}

interface SubmitButtonProps {
  isLoading: boolean;
}

export const NewsletterContainer = styled.div<NewsletterContainerProps>`
  width: 100%;
  margin: ${({ variant }) => {
    switch (variant) {
      case 'compact':
        return '1rem 0';
      case 'post-end':
        return '3rem 0 2rem';
      case 'list-end':
        return '2rem 0';
      default:
      case 'home':
        return '2rem 0';
    }
  }};
  padding: ${({ variant }) => {
    switch (variant) {
      case 'compact':
        return '1rem';
      case 'post-end':
        return '2rem';
      case 'list-end':
        return '1.5rem';
      default:
      case 'home':
        return '2rem';
    }
  }};
  border: 1px solid var(--color-border);
  background: var(--color-background);
  border-radius: 8px;
  box-shadow: var(--shadow-light);
  transition: 0.3s ease;

  &:hover {
    box-shadow: var(--shadow-medium);
  }

  @media (max-width: 768px) {
    padding: ${({ variant }) => {
      switch (variant) {
        case 'compact':
          return '0.75rem';
        case 'post-end':
          return '1.5rem';
        case 'list-end':
          return '1rem';
        default:
        case 'home':
          return '1.5rem';
      }
    }};
  }

  @media (max-width: 450px) {
    padding: ${({ variant }) => {
      switch (variant) {
        case 'compact':
          return '0.5rem';
        case 'post-end':
          return '1rem';
        case 'list-end':
          return '0.75rem';
        default:
        case 'home':
          return '1rem';
      }
    }};
  }
`;

export const NewsletterContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

export const NewsletterHeader = styled.div`
  text-align: center;
`;

export const NewsletterTitle = styled.h3<{ variant?: string }>`
  font-size: ${({ variant }) => {
    switch (variant) {
      case 'compact':
        return '1.1rem';
      case 'post-end':
        return '1.5rem';
      case 'list-end':
        return '1.3rem';
      default:
      case 'home':
        return '1.4rem';
    }
  }};
  font-weight: 700;
  color: var(--color-text);
  margin: 0 0 0.5rem 0;
  letter-spacing: 0.069rem;
  line-height: 1.4;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }

  @media (max-width: 450px) {
    font-size: 1.1rem;
  }
`;

export const NewsletterDescription = styled.p`
  font-size: 1rem;
  font-weight: 300;
  color: var(--color-text-secondary);
  margin: 0;
  line-height: 1.6;
  letter-spacing: 0.069rem;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }

  @media (max-width: 450px) {
    font-size: 0.85rem;
  }
`;

export const NewsletterForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const InputGroup = styled.div`
  display: flex;
  gap: 0.75rem;
  align-items: stretch;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`;

export const EmailInput = styled.input<EmailInputProps>`
  flex: 1;
  padding: 0.75rem 1rem;
  border: 1px solid
    ${({ hasError }) => (hasError ? '#e74c3c' : 'var(--color-border)')};
  border-radius: 6px;
  background: var(--color-background);
  color: var(--color-text);
  font-size: 1rem;
  font-family: inherit;
  transition: 0.3s ease;
  outline: none;

  &::placeholder {
    color: var(--color-text-secondary);
    opacity: 0.7;
  }

  &:focus {
    border-color: var(--color-primary);
    box-shadow: 0 0 0 2px rgba(37, 170, 225, 0.1);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  @media (max-width: 768px) {
    padding: 0.875rem 1rem;
    font-size: 1rem;
  }
`;

export const SubmitButton = styled.button<SubmitButtonProps>`
  padding: 0.75rem 1.5rem;
  background: var(--color-primary);
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 600;
  font-family: inherit;
  cursor: pointer;
  transition: 0.3s ease;
  white-space: nowrap;
  min-width: 120px;
  opacity: ${({ isLoading }) => (isLoading ? 0.7 : 1)};

  &:hover:not(:disabled) {
    background: var(--color-blue-dark);
    transform: translateY(-1px);
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }

  @media (max-width: 768px) {
    padding: 0.875rem 1.5rem;
    font-size: 1rem;
    min-width: 100%;
  }
`;

export const TermsGroup = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  margin-top: 0.5rem;
`;

export const TermsCheckbox = styled.input`
  margin: 0;
  margin-top: 0.125rem;
  width: 16px;
  height: 16px;
  accent-color: var(--color-primary);
  cursor: pointer;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const TermsLabel = styled.label`
  font-size: 0.9rem;
  font-weight: 300;
  color: var(--color-text-secondary);
  line-height: 1.5;
  cursor: pointer;
  user-select: none;

  @media (max-width: 768px) {
    font-size: 0.85rem;
  }
`;

export const TermsLink = styled.a`
  color: var(--color-primary);
  text-decoration: underline;
  transition: 0.3s ease;

  &:hover {
    color: var(--color-blue-dark);
  }
`;

export const ErrorMessage = styled.div`
  padding: 0.75rem 1rem;
  background: rgba(231, 76, 60, 0.1);
  border: 1px solid rgba(231, 76, 60, 0.3);
  border-radius: 6px;
  color: #e74c3c;
  font-size: 0.9rem;
  font-weight: 400;
  text-align: center;
  margin-top: 0.5rem;

  @media (max-width: 768px) {
    font-size: 0.85rem;
    padding: 0.625rem 0.875rem;
  }
`;

export const SuccessMessage = styled.div`
  padding: 0.75rem 1rem;
  background: rgba(46, 204, 113, 0.1);
  border: 1px solid rgba(46, 204, 113, 0.3);
  border-radius: 6px;
  color: #27ae60;
  font-size: 0.9rem;
  font-weight: 400;
  text-align: center;
  margin-top: 0.5rem;

  @media (max-width: 768px) {
    font-size: 0.85rem;
    padding: 0.625rem 0.875rem;
  }
`;
