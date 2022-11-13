import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux';

import { addChat } from 'src/store/chatlist/slice';
import { ButtonAdd } from './components/ButtonAdd';
import { InputAdd } from './components/InputAdd';

import style from './ChatsForm.module.scss';

export const ChatForm: FC = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (name) {
      dispatch(addChat({ name }));
      setName('');
    }
  };
  return (
    <form className={style.chatsform} onSubmit={handleSubmit}>
      <InputAdd name={name} setName={setName} />
      <ButtonAdd />
    </form>
  );
};
