import React, { FC } from 'react';
import './Message.css';

interface MessageProps {
  value: string;
  setValue: (e: string) => void;
}

export const Message: FC<MessageProps> = ({ value, setValue }) => (
  <textarea
    data-testid="message"
    value={value}
    onChange={(e) => setValue(e.target.value)}
    placeholder="Your message"
  />
);
