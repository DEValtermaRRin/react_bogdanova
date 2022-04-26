import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import userEvent from '@testing-library/user-event';
import { ChatWindow } from './ChatWindow';

describe('ChatWindow', () => {
  it('render component', () => {
    const mockFn = jest.fn();
    render(<ChatWindow messages={{ a: [] }} setMessages={mockFn} />);
  });
  it('render with snapshot', () => {
    const mockFn = jest.fn();
    const { asFragment } = render(
      <ChatWindow messages={{}} setMessages={mockFn} />,
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it('field message is in ChatWindow', () => {
    const mockFn = jest.fn();
    render(<ChatWindow messages={{}} setMessages={mockFn} />);
    expect(screen.getByTestId('button')).toBeInTheDocument();
  });
  it('message output check', () => {
    const mockFn = jest.fn();
    render(<ChatWindow messages={{}} setMessages={mockFn} />);
    fireEvent.input(screen.getByTestId('message'), {
      target: { value: 'Some message' },
    });
    fireEvent.click(screen.getByTestId('button'));
    expect(screen.getByTestId('message')).toContainHTML('Some message');
  });
  it('answer from bot', async () => {
    const mockFn = jest.fn();
    render(<ChatWindow messages={{}} setMessages={mockFn} />);
    fireEvent.input(screen.getByTestId('user'), {
      target: { value: 'Vasya' },
    });
    await userEvent.click(screen.getByTestId('button'));
    expect(
      setTimeout(
        () => screen.findByText('BOT: You entered an empty message'),
        1100,
      ),
    ).toBeTruthy();
  });
  it('answer bot on empty message', () => {
    const mockFn = jest.fn();
    const { asFragment } = render(
      <ChatWindow messages={{}} setMessages={mockFn} />,
    );
    fireEvent.input(screen.getByTestId('message'), {
      target: { value: '' },
    });
    fireEvent.click(screen.getByTestId('button'));
    expect(asFragment()).toMatchSnapshot();
  });
});
