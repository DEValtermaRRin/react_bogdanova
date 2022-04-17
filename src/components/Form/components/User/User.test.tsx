import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { User } from './User';

describe('User', () => {
  const mockFn = jest.fn()
  it('render component', () => {
    render(<User name='' getName={mockFn} />);
  });
  it('render with snapshot', () => {
    expect(render(<User name='' getName={mockFn} />)).toMatchSnapshot();
  });
  it('placeholder correct value', () => {
    render(<User name="Your name?" getName={mockFn} />);
    expect(screen.getByPlaceholderText(/Your name?/)).toBeInTheDocument();
  });
  it('value change by typing', () => {    
    render(<User name="Vasia" getName={mockFn}/>);
    expect(screen.getByTestId('user')).toHaveValue('Vasia')
  });
});
