import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import ClickCounter from './ClickCounter';

test('increments counter when button is clicked', async () => {
  render(<ClickCounter />);

  const button = screen.getByRole('button', { name: /click me/i });
  const message = screen.getByText(/you clicked 0 times/i);

  expect(message).toBeInTheDocument();

  // simulate a user clicking the button
  await userEvent.click(button);

  // check updated message
  expect(screen.getByText(/you clicked 1 times/i)).toBeInTheDocument();
});
