import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Message } from './Message';

describe('Message', () => {
  it('render component', () => {
    const mockFn = jest.fn();
    render(<Message value="" setValue={mockFn} />);
  });
  it('render with snapshot', () => {
    const mockFn = jest.fn();
    expect(render(<Message value="" setValue={mockFn} />)).toMatchSnapshot();
  });
  it('placeholder correct value', () => {
    const mockFn = jest.fn();
    render(<Message value="Your message" setValue={mockFn} />);
    expect(screen.getByPlaceholderText(/Your message/)).toBeInTheDocument();
  });
});
