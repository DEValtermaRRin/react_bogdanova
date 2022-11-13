import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Form } from './Form';
import { User } from '../User/User';

describe('Form', () => {
  it('render component', () => {
    render(<Form userName={''} />);
  });
  it('render with snapshot', () => {
    expect(render(<Form userName={''} />)).toMatchSnapshot();
  });
  it('render message with text', () => {
    render(<Form userName={''} />);
    fireEvent.input(screen.getByTestId('message'), {
      target: { value: 'Hello' },
    });
    fireEvent.click(screen.getByTestId('button'));
    expect(screen.getByText(/hello/i)).toBeInTheDocument();
  });
  it('check click', () => {
    const handleSubmit = jest.fn();
    render(<User name="Vasia" getName={handleSubmit} />);
    const { getByTestId } = render(<Form userName={''} />);
    const button = getByTestId('button');
    fireEvent.input(screen.getByTestId('user'), {
      target: { value: 'Vasya' },
    });
    fireEvent.click(button);
    expect(handleSubmit).toHaveBeenCalledTimes(1);
  });
});
