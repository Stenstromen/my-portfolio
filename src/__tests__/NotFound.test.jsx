/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import NotFound from '../Pages/NotFound';

jest.mock('react-helmet', () => ({
  Helmet: ({ children }) => <div>{children}</div>
}));

jest.mock('react-bootstrap/Stack', () => {
  return function MockStack({ children }) {
    return <div data-testid="stack">{children}</div>;
  };
});

jest.mock('../Components/Badge', () => {
  return function MockBadge({ alt }) {
    return <img data-testid="badge-image" alt={alt} />;
  };
});

describe('NotFound Component', () => {
  it('renders 404 message', () => {
    render(<NotFound />);
    
    expect(screen.getByText('404 - Page not found')).toBeInTheDocument();
    expect(screen.getByText(/The page you are looking for does not exist/)).toBeInTheDocument();
  });

  it('renders 404 image', () => {
    render(<NotFound />);
    const image = screen.getByTestId('badge-image');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('alt', '404');
  });
});