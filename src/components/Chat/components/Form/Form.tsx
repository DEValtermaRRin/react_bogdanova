import React, { useState, memo } from 'react';
import { Button } from './components/Button/Button';
import { ButtonDel } from './components/ButtonDel/ButtonDel';
import { Message } from './components/Message/Message';
import './Form.scss';

interface FormProps {
  addMessages: (val: string, user: string) => void;
  onSubmit?: () => void;
  userName: string;
  delMessages: () => void;
}

export const Form = memo<FormProps>(
  ({ delMessages, userName, addMessages }) => {
    const name = 'Send message';
    const [value, setValue] = useState('');

    const handleClickSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      addMessages(value, userName);
      setValue('');
    };
    return (
      <form data-testid="form" onSubmit={handleClickSubmit} className="form">
        <ButtonDel delMessages={delMessages} />
        <Message value={value} setValue={setValue} />
        <Button disabled={!userName} name={name} />
      </form>
    );
  },
);
