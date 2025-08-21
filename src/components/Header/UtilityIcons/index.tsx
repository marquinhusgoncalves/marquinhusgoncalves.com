import React from 'react';
import { useTheme } from '../../../contexts/ThemeContext';
import * as S from './styled';

const UtilityIcons: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <S.UtilityIconsContainer>
      <S.UtilityButton
        onClick={toggleTheme}
        aria-label={`Alternar para tema ${theme === 'light' ? 'escuro' : 'claro'}`}
        title={`Alternar para tema ${theme === 'light' ? 'escuro' : 'claro'}`}
      >
        {theme === 'light' ? <S.MoonIcon /> : <S.SunIcon />}
      </S.UtilityButton>
    </S.UtilityIconsContainer>
  );
};

export default UtilityIcons;
