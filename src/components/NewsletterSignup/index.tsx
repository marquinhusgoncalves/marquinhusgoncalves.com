import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
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
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  // Títulos e descrições padrão baseados na variante
  const getDefaultContent = () => {
    switch (variant) {
      case 'compact':
        return {
          title: t('components.newsletter.variants.compact.title'),
          description: t('components.newsletter.variants.compact.description'),
        };
      case 'post-end':
        return {
          title: t('components.newsletter.variants.postEnd.title'),
          description: t('components.newsletter.variants.postEnd.description'),
        };
      case 'list-end':
        return {
          title: t('components.newsletter.variants.listEnd.title'),
          description: t('components.newsletter.variants.listEnd.description'),
        };
      default:
        return {
          title: t('components.newsletter.variants.home.title'),
          description: t('components.newsletter.variants.home.description'),
        };
    }
  };

  const { title: defaultTitle, description: defaultDescription } =
    getDefaultContent();
  const displayTitle = title || defaultTitle;
  const displayDescription = description || defaultDescription;

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim()) {
      setStatus('error');
      setErrorMessage(t('components.newsletter.messages.emailRequired'));
      return;
    }

    if (!validateEmail(email)) {
      setStatus('error');
      setErrorMessage(t('components.newsletter.messages.emailInvalid'));
      return;
    }

    if (!acceptedTerms) {
      setStatus('error');
      setErrorMessage(t('components.newsletter.messages.termsRequired'));
      return;
    }

    setIsLoading(true);
    setStatus('idle');
    setErrorMessage('');

    try {
      // TODO: Implementar integração com Supabase
      // Simulando envio
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setStatus('success');
      setEmail('');
      setAcceptedTerms(false);

      // Reset status após 5 segundos
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      setStatus('error');
      setErrorMessage(t('components.newsletter.messages.error'));
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
