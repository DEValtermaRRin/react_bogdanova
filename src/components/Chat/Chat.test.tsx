import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Chat } from './Chat';
import userEvent from '@testing-library/user-event';

describe('Chat', () => {
  it('render component', () => {
    render(<Chat />);
  });
  it('render with snapshot', () => {
    const { asFragment } = render(<Chat />);
    expect(asFragment()).toMatchSnapshot();
  });
  it('field message is in Chat', () => {
    render(<Chat />);
    expect(screen.getByText('Send message')).toBeInTheDocument();
  });
  it('message output check', () => {
    render(<Chat />);
    fireEvent.input(screen.getByTestId('message'), {
      target: { value: 'Some message' },
    });
    fireEvent.click(screen.getByTestId('button'));
    expect(screen.getByTestId('message')).toContainHTML('Some message');
  });
  it('answer from bot', async () => {
    render(<Chat />);
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
    const { asFragment } = render(<Chat />);
    fireEvent.input(screen.getByTestId('message'), {
      target: { value: '' },
    });
    fireEvent.click(screen.getByTestId('button'));
    expect(asFragment()).toMatchSnapshot();
  });
});
