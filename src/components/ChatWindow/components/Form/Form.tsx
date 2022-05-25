import React, { useState, memo } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { ThunkDispatch } from 'redux-thunk';

import { ButtonSend } from './components/ButtonSend';
import { ButtonDel } from './components/ButtonDel';
import { Message } from './components/Message';

import { AddMessage } from 'store/chatlist/types';
import { addMessageWithReply, ChatListState } from 'store/chatlist/slice';

import style from './Form.module.scss';

export interface FormProps {
  userName: string;
}

export const Form = memo<FormProps>(({ userName }) => {
  const [value, setValue] = useState('');
  const dispatch =
    useDispatch<ThunkDispatch<ChatListState, void, ReturnType<AddMessage>>>();
  const { chatId } = useParams();

  const handleClickSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (chatId && value) {
      dispatch(
        addMessageWithReply({
          chatId,
          message: { text: value, author: userName },
        }),
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
