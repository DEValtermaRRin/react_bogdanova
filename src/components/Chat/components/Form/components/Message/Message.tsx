import React, { FC, useRef } from 'react';
import './Message.scss';

interface MessageProps {
  value: string;
  setValue: (e: string) => void;
}

export const Message: FC<MessageProps> = ({ value, setValue }) => {
  const refInput = useRef(null)
  return (
    <textarea
      ref={refInput}
      className="message"
      data-testid="message"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder="Your message"
    />
  );
};
