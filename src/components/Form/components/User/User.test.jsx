import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { User } from './User';

describe('User', () => {
  it('render component', () => {
    render(<User />)
  });
  it('render with snapshot', () => {
    expect(render(<User />)).toMatchSnapshot()
  })
});
