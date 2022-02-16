import React from 'react';
import { render, screen } from '@testing-library/react';
import {Heading} from './App';

test('renders hello world', () => {
  render(<Heading heading='Hello World' />);
  const linkElement = screen.getByText(/Hello World/i);
  expect(linkElement).toBeInTheDocument();
});
