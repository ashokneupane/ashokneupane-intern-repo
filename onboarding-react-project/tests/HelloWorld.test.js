import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import HelloWorld from './HelloWorld';

test('renders Hello, World! message', () => {
  render(<HelloWorld />);
  const headingElement = screen.getByText(/hello, world!/i);
  expect(headingElement).toBeInTheDocument();
});
