import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Form } from './Form';




describe('Form', () => {
  it('render component', () => {
    render(<Form addMessages={Object} />)
  })
  it('render with snapshot', () => {
    expect(
      render(<Form addMessages={Object} />)).toMatchSnapshot();
  });
  it('render message with text', () => {
    render(<Form  addMessages={Object}/>)
    fireEvent.input(screen.getByTestId('message'), {
      target: {value: 'Hello'}
    })
    fireEvent.click(screen.getByRole('button'))
    expect(screen.getByText(/hello/i)).toBeInTheDocument()
  })
/*   it('render user with text', () => {
    render(<Form  addMessages={Object}/>)
    fireEvent.input(screen.getByTestId('user'), {
      target: {value: 'Vasia'}
    })
    fireEvent.click(screen.getByRole('button'))
    expect(screen.getAllByText(/Vasia/)).toBeInTheDocument()
  }) */
})

