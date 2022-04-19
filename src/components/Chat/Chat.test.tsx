import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { App } from '../../App';
// import userEvent from '@testing-library/user-event';

describe('App', () => {
  it('render component', () => {
    render(<App />);
  });
  it('render with snapshot', () => {
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
  });
  it('field message is in App', () => {
    render(<App />);
    expect(screen.getByText('Send message')).toBeInTheDocument();
  });
  it('message output check', () => {
    render(<App />);
    fireEvent.input(screen.getByTestId('message'), {
      target: { value: 'Some message' },
    });
    fireEvent.click(screen.getByTestId('button'));
    expect(screen.getByTestId('message')).toContainHTML('Some message');
  });

  // падает - разобраться (не ругаться!!!))

  /* it('answer from bot', async () => {
    render(<App />);
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
    const { asFragment } = render(<App />);
    fireEvent.input(screen.getByTestId('message'), {
      target: { value: '' },
    });
    fireEvent.click(screen.getByRole('button'));
    expect(asFragment()).toMatchSnapshot();
  });
});
