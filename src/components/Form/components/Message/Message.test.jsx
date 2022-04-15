import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import '@testing-library/jest-dom';
import { Message } from './Message';
/* import { unmountComponentAtNode } from 'react-dom'; */

describe('Message', () => {
  it('render component', () => {
    render(<Message />)
  });
  it('render with snapshot', () => {
    expect(render(<Message />)).toMatchSnapshot()
  })
  it('placeholder correct value', () => {
    render(<Message />)
    expect(screen.getByPlaceholderText(/Your message/)).toBeInTheDocument()
  })
  it('input is clear to type', () => {
    render(<Message />)
    const textarea = screen.getByPlaceholderText('Your message');
    expect(textarea.value).toBe('')
  })
  it('input value change by typing', () => {
    const mockFn = jest.fn()
    render(<Message setValue={mockFn} />)
    const textarea = screen.getByPlaceholderText('Your message');    
    fireEvent.change(textarea, { target: { value: 'test type' }})
    expect(textarea.value).toBe('test type')
  })
});
