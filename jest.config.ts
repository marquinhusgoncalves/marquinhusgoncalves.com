import type { Config } from 'jest';

const config: Config = {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(ts|tsx)$': ['ts-jest', { tsconfig: './tsconfig.test.json' }],
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  moduleNameMapper: {
    '\\.css$': 'identity-obj-proxy',
    '^gatsby$': '<rootDir>/__mocks__/gatsby.tsx',
    '^gatsby-plugin-image$': '<rootDir>/__mocks__/gatsby-plugin-image.tsx',
    '^react-i18next$': '<rootDir>/__mocks__/react-i18next.tsx',
  },
  testMatch: ['**/__tests__/**/*.test.(ts|tsx)'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
};

export default config;
