import React from 'react';

module.exports = {
  useTranslation: () => ({
    t: (k: string) => k,
    i18n: { changeLanguage: jest.fn(), language: 'pt' },
  }),
  Trans: ({ children }: { children: React.ReactNode }) => children,
  initReactI18next: { type: '3rdParty', init: jest.fn() },
};
