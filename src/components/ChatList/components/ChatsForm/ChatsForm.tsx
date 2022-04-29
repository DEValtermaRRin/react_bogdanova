import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addChat } from '../../../../store/chatlist/actions';
import style from './ChatsForm.module.scss';

export const ChatForm: FC = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (name) {
      dispatch(addChat(name));
      setName('');
    }
  };
  return (
    <form className={style.chatsform} onSubmit={handleSubmit}>
      <input
        className={style.input_add}
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button className={style.button_add} type="submit">
        +
      </button>
    </form>
  );
};
