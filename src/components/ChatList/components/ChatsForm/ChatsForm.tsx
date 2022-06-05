import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';

import { ButtonAdd } from './components/ButtonAdd';
import { InputAdd } from './components/InputAdd';

import style from './ChatsForm.module.scss';
import { set } from 'firebase/database';
import { getChatsById } from 'src/services/firebase';

export const ChatForm: FC = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (name) {
      const id = nanoid();
      // dispatch(addChat({ name }));
      set(getChatsById(id), { 
        id,
        name,
      });
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
