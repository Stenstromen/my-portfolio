/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProjectCard from '../Components/ProjectCard';

// Mock Badge component
jest.mock('../Components/Badge', () => {
  return function MockBadge({ alt, src, width, height }) {
    return <img data-testid="badge-image" alt={alt} src={src} width={width} height={height} />;
  };
});

// Mock framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }) => <div {...props}>{children}</div>
  }
}));

describe('ProjectCard Component', () => {
  const mockProps = {
    image: 'test-image.jpg',
    title: 'Test Project',
    description: 'Test Description',
    link: 'https://test.com',
    github: 'https://github.com/test',
    badges: [
      { src: 'badge1.png', name: 'Badge 1', width: '50px' },
      { src: 'badge2.png', name: 'Badge 2', width: '50px' }
    ]
  };

  beforeEach(() => {
    // Clear any previous render
    jest.clearAllMocks();
  });

  it('renders project information correctly', () => {
    render(<ProjectCard {...mockProps} />);
    
    expect(screen.getByText('Test Project')).toBeInTheDocument();
    expect(screen.getByText('Test Description')).toBeInTheDocument();
    expect(screen.getByAltText('Test Project')).toBeInTheDocument();
  });

  it('renders links correctly', () => {
    render(<ProjectCard {...mockProps} />);
    
    const projectLink = screen.getByTitle('Visit Test Project');
    expect(projectLink).toHaveAttribute('href', 'https://test.com');
    expect(projectLink).toHaveAttribute('target', '_blank');
    expect(projectLink).toHaveAttribute('rel', 'noreferrer');
  });

  it('transforms github link correctly', () => {
    const props = {
      ...mockProps,
      github: 'https://github.com/Stenstromen/test-project'
    };
    render(<ProjectCard {...props} />);
    
    const githubLink = screen.getByText('Github!');
    expect(githubLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute('href', 'https://github.com/Stenstromen/test-project');
  });

  it('renders project badges', () => {
    render(<ProjectCard {...mockProps} />);
    
    const badges = screen.getAllByTestId('badge-image');
    expect(badges).toHaveLength(mockProps.badges.length);
    badges.forEach((badge, index) => {
      expect(badge).toHaveAttribute('src', mockProps.badges[index].src);
      expect(badge).toHaveAttribute('alt', mockProps.badges[index].name);
      expect(badge).toHaveAttribute('width', String(parseInt(mockProps.badges[index].width) - 29));
      expect(badge).toHaveAttribute('height', '28px');
    });
  });
}); 