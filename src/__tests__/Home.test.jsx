/* eslint-disable no-undef */
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../Pages/Home';

// Mock Badges component
jest.mock('../Components/Badges', () => {
  return function MockBadges() {
    return <div data-testid="badges">Badges Mock</div>;
  };
});

describe('Home Component', () => {
  it('renders welcome messages', () => {
    render(<Home />);
    
    expect(screen.getByText('Hello!')).toBeInTheDocument();
    expect(screen.getByText(/I'm Filip - DevOps Engineer and Hobbyist Programmer./)).toBeInTheDocument();
    expect(screen.getByText(/- Based in Stockholm, Sweden./)).toBeInTheDocument();
  });

  it('renders badges component', () => {
    render(<Home />);
    expect(screen.getByTestId('badges')).toBeInTheDocument();
  });
}); 