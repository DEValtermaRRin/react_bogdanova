import React, { useState, memo } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addMessage } from '../../../../store/chatlist/actions';
import { Button } from './components/Button/Button';
import { ButtonDel } from './components/ButtonDel/ButtonDel';
import { Message } from './components/Message/Message';
import style from './Form.module.scss';

interface FormProps {
  userName: string;
}

export const Form = memo<FormProps>(({ userName }) => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();
  const { chatId } = useParams();

  const handleClickSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (chatId) {
      dispatch(addMessage(chatId, value, userName));
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
      <Button disabled={!userName} />
    </form>
  );
});
