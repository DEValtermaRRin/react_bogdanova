import React, { useState, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { store } from '../../../../store';
import { addMessage, delMessage } from '../../../../store/chatlist/actions';
import { selectChats } from '../../../../store/chatlist/selectors';
import { Button } from './components/Button/Button';
import { ButtonDel } from './components/ButtonDel/ButtonDel';
import { Message } from './components/Message/Message';
import style from './Form.module.scss';

interface FormProps {
  // addMessages: (val: string, user: string) => void;
  // onSubmit?: () => void;
  userName: string;
  // delMessages: () => void;
}

export const Form = memo<FormProps>(
  ({ /* delMessages, */ userName, /* addMessages */ }) => {
    const [value, setValue] = useState('');
    const dispatch = useDispatch()
    const { chatId } = useParams();
    // const chats = useSelector(selectChats)

    const handleClickSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      // addMessages(value, userName);
      dispatch(addMessage(chatId, value, userName))
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
        <Button disabled={!userName} />
      </form>
    );
  },
);
