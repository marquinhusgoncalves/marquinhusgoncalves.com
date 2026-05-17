import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Layout from '../components/Layout';

jest.mock('../components/Header', () => () => <header />);
jest.mock('../components/Footer', () => () => <footer />);
jest.mock('../contexts/ThemeContext', () => ({
  ThemeProvider: ({ children }: { children: React.ReactNode }) => <>{children}</>,
}));

describe('Layout', () => {
  it('renders skip link pointing to main content', () => {
    const { getByText } = render(<Layout>content</Layout>);
    const skipLink = getByText('Pular para o conteúdo');
    expect(skipLink).toBeInTheDocument();
    expect(skipLink).toHaveAttribute('href', '#main-content');
  });

  it('renders main element with id main-content', () => {
    const { getByRole } = render(<Layout>content</Layout>);
    expect(getByRole('main')).toHaveAttribute('id', 'main-content');
  });

  it('renders scroll-to-top with correct accessibility attributes', () => {
    const { getByRole } = render(<Layout>content</Layout>);
    const scrollBtn = getByRole('button', { name: /voltar ao topo/i });
    expect(scrollBtn).toHaveAttribute('aria-label', 'Voltar ao topo da página');
    expect(scrollBtn).toHaveAttribute('tabindex', '-1');
  });
});
