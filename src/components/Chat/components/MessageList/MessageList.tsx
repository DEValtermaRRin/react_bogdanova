import React, { FC } from 'react';
import './MessageList.scss';

interface Msg {
  id?: string;
  author: string;
  value: string;
}

interface MessageListProps {
  messages: Msg[]; // Array<Msg>  -- комментарий оставлен в учебных целях
}

export const MessageList: FC<MessageListProps> = ({ messages }) => (
  <div data-testid="messageList" className="messagelist">
    {messages.map((msg) => (
      <p className="msg" key={msg.id}>
        <span className="msg__author">{msg.author} : </span> {msg.value}
      </p>
    ))}
  </div>
);
