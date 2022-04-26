import React, { FC } from 'react';
import style from './ChatsForm.module.scss';

interface ChatFormProps {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  value: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
}

export const ChatForm: FC<ChatFormProps> = ({
  handleSubmit,
  value,
  setName,
}) => (
  <form className={style.chatsform} onSubmit={handleSubmit}>
    <input
      className={style.input_add}
      type="text"
      value={value}
      onChange={(e) => setName(e.target.value)}
    />
    <button className={style.button_add} type="submit">
      +
    </button>
  </form>
);
