import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { navigate } from 'gatsby';
import * as S from './styled';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const toggleLanguage = () => {
    if (!isClient) return;

    const newLang = i18n.language === 'pt' ? 'en' : 'pt';
    i18n.changeLanguage(newLang);

    const currentPath = window.location.pathname;
    let newPath = currentPath;

    if (newLang === 'en') {
      if (currentPath === '/') {
        newPath = '/en';
      } else if (!currentPath.startsWith('/en/')) {
        newPath = `/en${currentPath}`;
      }
    } else {
      if (currentPath === '/en') {
        newPath = '/';
      } else if (currentPath.startsWith('/en/')) {
        newPath = currentPath.replace('/en', '');
      }
    }
    if (newPath !== currentPath) {
      navigate(newPath);
    }
  };

  const getFlag = () => {
    return i18n.language === 'pt' ? '🇺🇸' : '🇧🇷';
  };

  const getNextLanguage = () => {
    return i18n.language === 'pt' ? 'EN' : 'PT';
  };

  const currentLanguage = i18n.language || 'pt';

  return (
    <S.LanguageButton
      onClick={toggleLanguage}
      aria-label={`Change language to ${getNextLanguage()}`}
      title={`Current: ${currentLanguage.toUpperCase()}. Click to change to ${getNextLanguage()}`}
    >
      {getFlag()}
    </S.LanguageButton>
  );
};

export default LanguageSwitcher;
