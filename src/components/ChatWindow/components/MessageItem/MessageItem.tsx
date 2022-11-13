import React, { FC, memo } from 'react';
import style from './MessageItem.module.scss';

export interface Message {
  id: string;
  author: string;
  text: string;
}

export interface MessageProps {
  message: Message;
}

export const MessageItem: FC<MessageProps> = memo(({ message }) => (
  <p
    className={message.author === 'BOT' ? style.bot : style.msg}
    key={message.id}
  >
    <span
      className={
        message.author === 'BOT' ? style.bot__botAuthor : style.msg__author
      }
    >
      {message.author}:{' '}
    </span>
    <span className={style.msg__text}>{message.text}</span>
  </p>
));
