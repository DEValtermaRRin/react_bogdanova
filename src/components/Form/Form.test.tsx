import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Form } from './Form';
import userEvent from '@testing-library/user-event';
import { TIMEOUT } from 'dns';

describe('Form', () => {
  it('render component', () => {
    const mockFn = jest.fn();
    render(<Form addMessages={Object} onSubmit={mockFn} />);
  });
  it('render with snapshot', () => {
    const mockFn = jest.fn();
    expect(
      render(<Form addMessages={Object} onSubmit={mockFn} />),
    ).toMatchSnapshot();
  });
  it('render message with text', () => {
    const mockFn = jest.fn();
    render(<Form addMessages={Object} onSubmit={mockFn} />);
    fireEvent.input(screen.getByTestId('message'), {
      target: { value: 'Hello' },
    });
    fireEvent.click(screen.getByRole('button'));
    expect(screen.getByText(/hello/i)).toBeInTheDocument();
  });

  // падает - разобраться (не ругаться!!!))

  /* it('check click', async () => {
    const mockFn = jest.fn();
    render(
      <Form addMessages={Object} onSubmit={() => setTimeout(mockFn, 1000)} />,
    );
    await userEvent.click(screen.getByTestId('button'));
    await waitFor(() => expect(mockFn).toHaveBeenCalledTimes(1), {
      timeout: 1100,
    });
  }); */
});
