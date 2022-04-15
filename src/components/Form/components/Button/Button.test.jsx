import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Button } from './Button';
import '@testing-library/jest-dom';
/* import { unmountComponentAtNode } from 'react-dom'; */

describe('Button', () => {
  it('render component', () => {
    render(<Button />)
  });
  it('render with snapshot', () => {
    expect(render(<Button />)).toMatchSnapshot();
  })
  it('button is disabled', () => {
    render(<Button disabled  />)
    expect(screen.getByRole('button')).toBeDisabled()
  })
  it('render multiply components', () => {
    render(
      <>
        <Button />
        <Button />
      </>
    )
    expect(screen.queryAllByRole('button').length).toBe(2)
  })
  it('render component with text', () => {
    render(<Button name={'Some'}/>)
    expect(screen.getByText(/Some/)).toBeInTheDocument();
  })
/*   it('button click', () => {
    const clickButton = jest.fn()
    render(<Button />)
    const button = screen.getByRole('button')
    fireEvent.click(button)
    expect(clickButton).toBeCalled()
  }) */
});
