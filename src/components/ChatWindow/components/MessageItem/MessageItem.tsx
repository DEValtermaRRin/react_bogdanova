import React, { FC, memo } from 'react';
import style from './MessageItem.module.scss';

export interface Message {
  id: string;
  author: string;
  value: string;
}

interface MessageProps {
  message: Message;
}

export const MessageItem: FC<MessageProps> = memo(({ message }) => (
  <p className={style.msg} key={message.id}>
    <span className={style.msg__author}>{message.author} : </span>{' '}
    <span className={style.msg__text}>{message.value}</span>
  </p>
));
