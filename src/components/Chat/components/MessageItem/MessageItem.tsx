import React, { FC, memo } from 'react';

export interface Message {
  id: string;
  author: string;
  value: string;
}

interface MessageProps {
  message: Message;
}

export const MessageItem: FC<MessageProps> = memo(({ message }) => (
  <p className="msg" key={message.id}>
    <span className="msg__author">{message.author} : </span> <span className='msg__text'>{message.value}</span>
  </p>
));
