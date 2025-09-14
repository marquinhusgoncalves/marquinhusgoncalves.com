import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { newsletterService, NewsletterError } from '../../services/newsletter';
import * as S from './styled';

interface NewsletterSignupProps {
  variant?: 'home' | 'compact' | 'post-end' | 'list-end';
  title?: string;
  description?: string;
  className?: string;
}

const NewsletterSignup: React.FC<NewsletterSignupProps> = ({
  variant = 'home',
  title,
  description,
  className,
}) => {
  const { t, i18n } = useTranslation();
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const getDefaultContent = () => {
    if (variant === 'compact') {
      return {
        title: t('components.newsletter.variants.compact.title'),
        description: t('components.newsletter.variants.compact.description'),
      };
    }

    if (variant === 'post-end') {
      return {
        title: t('components.newsletter.variants.postEnd.title'),
        description: t('components.newsletter.variants.postEnd.description'),
      };
    }

    if (variant === 'list-end') {
      return {
        title: t('components.newsletter.variants.listEnd.title'),
        description: t('components.newsletter.variants.listEnd.description'),
      };
    }

    return {
      title: t('components.newsletter.variants.home.title'),
      description: t('components.newsletter.variants.home.description'),
    };
  };

  const { title: defaultTitle, description: defaultDescription } =
    getDefaultContent();
  const displayTitle = title || defaultTitle;
  const displayDescription = description || defaultDescription;

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = (): string | null => {
    if (!email.trim()) {
      return t('components.newsletter.messages.emailRequired');
    }

    if (!validateEmail(email)) {
      return t('components.newsletter.messages.emailInvalid');
    }

    if (!acceptedTerms) {
      return t('components.newsletter.messages.termsRequired');
    }

    return null;
  };

  const getErrorMessage = (error: NewsletterError): string => {
    switch (error.code) {
      case 'TIMEOUT_ERROR':
        return t('components.newsletter.messages.timeoutError');
      case 'NETWORK_ERROR':
        return t('components.newsletter.messages.networkError');
      case 'RATE_LIMITED':
        return t('components.newsletter.messages.rateLimited');
      case 'SERVER_ERROR':
      case 'BAD_GATEWAY':
      case 'SERVICE_UNAVAILABLE':
      case 'GATEWAY_TIMEOUT':
        return t('components.newsletter.messages.serverError');
      case 'INVALID_RESPONSE':
        return t('components.newsletter.messages.invalidResponse');
      case 'SUBSCRIPTION_ERROR':
        if (error.message.includes('invalid_email')) {
          return t('components.newsletter.messages.emailInvalid');
        }
        if (error.message.includes('already')) {
          return t('components.newsletter.messages.alreadySubscribed');
        }
        return t('components.newsletter.messages.error');
      default:
        return t('components.newsletter.messages.error');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validationError = validateForm();
    if (validationError) {
      setStatus('error');
      setErrorMessage(validationError);
      return;
    }

    setIsLoading(true);
    setStatus('idle');
    setErrorMessage('');

    try {
      const currentPath =
        typeof window !== 'undefined' ? window.location.pathname : '';
      const source = newsletterService.getSourceFromPath(currentPath);
      const tags = newsletterService.getTagsFromContext(currentPath, variant);
      const locale = i18n.language || 'pt';

      const response = await newsletterService.subscribe({
        email: email.trim().toLowerCase(),
        source,
        variant,
        locale,
        tags,
      });

      if (response.ok) {
        setStatus('success');
        setEmail('');
        setAcceptedTerms(false);
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        throw new Error(response.error || 'Subscription failed');
      }
    } catch (error) {
      setStatus('error');

      if (error instanceof NewsletterError) {
        setErrorMessage(getErrorMessage(error));
      } else {
        setErrorMessage(t('components.newsletter.messages.error'));
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (status === 'error') {
      setStatus('idle');
      setErrorMessage('');
    }
  };

  const handleTermsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAcceptedTerms(e.target.checked);
    if (status === 'error') {
      setStatus('idle');
      setErrorMessage('');
    }
  };

  return (
    <S.NewsletterContainer variant={variant} className={className}>
      <S.NewsletterContent>
        <S.NewsletterHeader>
          <S.NewsletterTitle variant={variant}>
            {displayTitle}
          </S.NewsletterTitle>
          <S.NewsletterDescription>
            {displayDescription}
          </S.NewsletterDescription>
        </S.NewsletterHeader>

        <S.NewsletterForm onSubmit={handleSubmit}>
          <S.InputGroup>
            <S.EmailInput
              type="email"
              placeholder={t('components.newsletter.form.emailPlaceholder')}
              value={email}
              onChange={handleEmailChange}
              disabled={isLoading}
              hasError={status === 'error'}
              aria-label={t('components.newsletter.form.emailPlaceholder')}
            />
            <S.SubmitButton
              type="submit"
              disabled={isLoading || !email.trim() || !acceptedTerms}
              isLoading={isLoading}
            >
              {isLoading
                ? t('components.newsletter.form.submittingButton')
                : t('components.newsletter.form.submitButton')}
            </S.SubmitButton>
          </S.InputGroup>

          <S.TermsGroup>
            <S.TermsCheckbox
              type="checkbox"
              id="newsletter-terms"
              checked={acceptedTerms}
              onChange={handleTermsChange}
              disabled={isLoading}
            />
            <S.TermsLabel htmlFor="newsletter-terms">
              {t('components.newsletter.form.termsText')}{' '}
              <S.TermsLink
                href="/newsletter/termos"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t('components.newsletter.form.termsLink')}
              </S.TermsLink>{' '}
              {t('components.newsletter.form.and')}{' '}
              <S.TermsLink
                href="/newsletter/privacidade"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t('components.newsletter.form.privacyLink')}
              </S.TermsLink>
            </S.TermsLabel>
          </S.TermsGroup>

          {status === 'error' && (
            <S.ErrorMessage role="alert">{errorMessage}</S.ErrorMessage>
          )}

          {status === 'success' && (
            <S.SuccessMessage role="alert">
              {t('components.newsletter.messages.success')}
            </S.SuccessMessage>
          )}
        </S.NewsletterForm>
      </S.NewsletterContent>
    </S.NewsletterContainer>
  );
};

export default NewsletterSignup;
