import React, { FC } from 'react';
import './Message.scss';

interface MessageProps {
  value: string;
  setValue: (e: string) => void;
}

export const Message: FC<MessageProps> = ({ value, setValue }) => (
  <textarea
    className="message"
    data-testid="message"
    value={value}
    onChange={(e) => setValue(e.target.value)}
    placeholder="Your message"
  />
);
