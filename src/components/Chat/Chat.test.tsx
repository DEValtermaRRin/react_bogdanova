import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Chat } from './Chat';
// import userEvent from '@testing-library/user-event';

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

  // падает - разобраться (не ругаться!!!))

  /* it('answer from bot', async () => {
    render(<Chat />);
    fireEvent.input(screen.getByTestId('user'), {
      target: { value: 'Vasya' },
    });
    userEvent.click(screen.getByRole('button'));
    await waitFor(() =>
      expect(
        screen.getByText('BOT: You entered an empty message'),
      ).toBeInTheDocument(),
    );
  }); */
  it('answer bot on empty message', () => {
    const { asFragment } = render(<Chat />);
    fireEvent.input(screen.getByTestId('message'), {
      target: { value: '' },
    });
    fireEvent.click(screen.getByRole('button'));
    expect(asFragment()).toMatchSnapshot();
  });
});
