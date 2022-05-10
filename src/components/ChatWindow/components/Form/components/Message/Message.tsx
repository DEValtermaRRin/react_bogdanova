import React, { FC, useRef } from 'react';
import style from './Message.module.scss';

export interface MessageProps {
  value: string;
  setValue: (e: string) => void;
}

export const Message: FC<MessageProps> = ({ value, setValue }) => {
  const refInput = useRef(null);
  return (
    <textarea
      ref={refInput}
      className={style.message__default}
      data-testid="message"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder="Your message"
    />
  );
};
