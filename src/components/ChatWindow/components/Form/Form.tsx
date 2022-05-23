import React, { useState, memo } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { ButtonSend } from './components/ButtonSend';
import { ButtonDel } from './components/ButtonDel';
import { Message } from './components/Message';

import { addMessage } from 'src/store/chatlist/slice';

import style from './Form.module.scss';

export interface FormProps {
  userName: string;
}

export const Form = memo<FormProps>(({ userName }) => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();
  const { chatId } = useParams();

  const handleClickSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (chatId && value) {
      dispatch(
        addMessage({ chatId, message: { text: value, author: userName } }),
      );
    }
    setValue('');
  };
  return (
    <form
      data-testid="form"
      onSubmit={handleClickSubmit}
      className={style.form}
    >
      <ButtonDel />
      <Message value={value} setValue={setValue} />
      <ButtonSend disabled={!userName} />
    </form>
  );
});
