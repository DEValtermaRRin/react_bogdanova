// import React from 'react';
// import { render } from '@testing-library/react';
// import '@testing-library/jest-dom';

// // import userEvent from '@testing-library/user-event';
// import { ChatWindow } from './ChatWindow';

// describe('ChatWindow', () => {
//   it('render component', () => {
//     render(<ChatWindow />);
//   });
//   it('render with snapshot', () => {
//     const { asFragment } = render(<ChatWindow />);
//     expect(asFragment()).toMatchSnapshot();
//   });

// разберусь с тестами на майских - не ругаться))

/*   it('field message is in ChatWindow', () => {
    render(<ChatWindow />);
    expect(screen.getByTestId('button')).toBeInTheDocument();
  });
  it('message output check', () => {
    render(<ChatWindow />);
    fireEvent.input(screen.getByTestId('message'), {
      target: { value: 'Some message' },
    });
    fireEvent.click(screen.getByTestId('button'));
    expect(screen.getByTestId('message')).toContainHTML('Some message');
  });
  it('answer from bot', async () => {
    render(<ChatWindow />);
    fireEvent.input(screen.getByTestId('user'), {
      target: { value: 'Vasya' },
    });
    await userEvent.click(screen.getByTestId('button'));
    expect(
      setTimeout(
        () => screen.findByText('BOT: You entered an empty message'),
        1100,
      ),
    ).toBeTruthy();
  });
  it('answer bot on empty message', () => {
    const { asFragment } = render(<ChatWindow />);
    fireEvent.input(screen.getByTestId('message'), {
      target: { value: '' },
    });
    fireEvent.click(screen.getByTestId('button'));
    expect(asFragment()).toMatchSnapshot();
  }); */
// });
