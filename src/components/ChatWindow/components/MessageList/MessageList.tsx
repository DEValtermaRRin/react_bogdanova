import React, { FC } from 'react';
import { MessageItem, Message } from '../MessageItem/MessageItem';
import './MessageList.scss';

interface MessageListProps {
  messages: Message[]; // Array<Msg>  -- комментарий оставлен в учебных целях
}

export const MessageList: FC<MessageListProps> = ({ messages }) => (
  <div data-testid="messageList" className="messagelist">
    {messages?.map((message: Message) => (
      <MessageItem message={message} key={message.id} />
    ))}
  </div>
);
