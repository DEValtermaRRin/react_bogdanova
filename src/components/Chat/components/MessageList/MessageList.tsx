import React, { FC } from 'react';
import { MessageItem } from '../MessageItem/MessageItem';
import './MessageList.scss';

interface Message {
  id: string;
  author: string;
  value: string;
}

interface MessageListProps {
  messages: Message[]; // Array<Msg>  -- комментарий оставлен в учебных целях
}

export const MessageList: FC<MessageListProps> = ({ messages }) => (
  <div data-testid="messageList" className="messagelist">
    {messages.map((msg) => (
      <MessageItem message={msg} key={msg.id} />
    ))}
  </div>
);
