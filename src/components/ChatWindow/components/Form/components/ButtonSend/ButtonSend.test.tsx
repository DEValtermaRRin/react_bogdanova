import React from 'react';
import { render, screen } from '@testing-library/react';
import { ButtonSend } from './ButtonSend';
import '@testing-library/jest-dom';
/* import { unmountComponentAtNode } from 'react-dom'; */

describe('Button', () => {
  it('render component', () => {
    render(<ButtonSend />);
  });
  it('render with snapshot', () => {
    expect(render(<ButtonSend />)).toMatchSnapshot();
  });
  it('button is disabled', () => {
    render(<ButtonSend disabled />);
    expect(screen.getByRole('button')).toBeDisabled();
  });
  it('render multiply components', () => {
    render(
      <>
        <ButtonSend />
        <ButtonSend />
      </>,
    );
    expect(screen.queryAllByRole('button').length).toBe(2);
  });
  it('render component with text', () => {
    render(<ButtonSend name={'Some'} />);
    expect(screen.getByTestId('button')).toBeInTheDocument();
  });
});
