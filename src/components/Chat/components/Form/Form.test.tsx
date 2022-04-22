import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Form } from './Form';
import { User } from '../User/User';

describe('Form', () => {
  it('render component', () => {
    const mockFn = jest.fn();
    render(
      <Form
        addMessages={Object}
        onSubmit={mockFn}
        userName={''}
        delMessages={mockFn}
      />,
    );
  });
  it('render with snapshot', () => {
    const mockFn = jest.fn();
    expect(
      render(
        <Form
          addMessages={Object}
          onSubmit={mockFn}
          userName={''}
          delMessages={mockFn}
        />,
      ),
    ).toMatchSnapshot();
  });
  it('render message with text', () => {
    const mockFn = jest.fn();
    render(
      <Form
        addMessages={Object}
        onSubmit={mockFn}
        userName={''}
        delMessages={mockFn}
      />,
    );
    fireEvent.input(screen.getByTestId('message'), {
      target: { value: 'Hello' },
    });
    fireEvent.click(screen.getByTestId('button'));
    expect(screen.getByText(/hello/i)).toBeInTheDocument();
  });
  it('check click', () => {
    const handleSubmit = jest.fn();
    render(<User name="Vasia" getName={handleSubmit} />);
    const { getByTestId } = render(
      <Form
        userName={''}
        addMessages={Object}
        onSubmit={handleSubmit}
        delMessages={handleSubmit}
      />,
    );
    const button = getByTestId('button');
    fireEvent.input(screen.getByTestId('user'), {
      target: { value: 'Vasya' },
    });
    fireEvent.click(button);
    expect(handleSubmit).toHaveBeenCalledTimes(1);
  });
});
