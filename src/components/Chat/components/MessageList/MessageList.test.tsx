import React from 'react';
import { MessageList } from './MessageList';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('MessageList', () => {
  it('render component', () => {
    render(<MessageList messages={[]} />);
  });
  it('render with snapshot', () => {
    expect(render(<MessageList messages={[]} />)).toMatchSnapshot();
  });
  it('correct output of messages', () => {
    const msg = {
      id: '1',
      author: 'Vasya',
      value: 'Hello',
    };
    render(<MessageList messages={[msg]} />);
    expect(screen.getByText(/vasya: hello/i)).toBeTruthy();
  });
});
