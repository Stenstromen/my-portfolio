/* eslint-disable no-undef */
/* eslint-disable react/react-in-jsx-scope */
import '@testing-library/jest-dom';

// Mock IntersectionObserver
global.IntersectionObserver = class IntersectionObserver {
  constructor(callback) {
    this.callback = callback;
  }

  observe(element) {
    // Simulate immediate intersection
    this.callback([
      {
        isIntersecting: true,
        target: element
      }
    ]);
  }

  unobserve() {}
  disconnect() {}
};

// Mock framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }) => <div {...props}>{children}</div>
  },
  AnimatePresence: ({ children }) => children
}));
