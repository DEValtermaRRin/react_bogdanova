import React, { FC } from 'react';
import './ChatsForm.scss';

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
  <form className="chatsform" onSubmit={handleSubmit}>
    <input
      className="input-add"
      type="text"
      value={value}
      onChange={(e) => setName(e.target.value)}
    />
    <button className="button-add" type="submit">
      +
    </button>
  </form>
);
