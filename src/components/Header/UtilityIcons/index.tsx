import React from 'react';
import { useTheme } from '../../../contexts/ThemeContext';
import LanguageSwitcher from '../../LanguageSwitcher';
import * as S from './styled';

const UtilityIcons: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <S.UtilityIconsContainer>
      <LanguageSwitcher />
      <S.UtilityButton
        onClick={toggleTheme}
        aria-label={`Alternar para tema ${theme === 'light' ? 'escuro' : 'claro'}`}
        title={`Alternar para tema ${theme === 'light' ? 'escuro' : 'claro'}`}
        suppressHydrationWarning
      >
        {theme === 'light' ? <S.MoonIcon /> : <S.SunIcon />}
      </S.UtilityButton>
    </S.UtilityIconsContainer>
  );
};

export default UtilityIcons;
