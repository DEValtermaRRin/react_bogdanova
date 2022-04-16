import React, { FC }  from 'react';
import './Message.css';

interface MessageProps {
  value: string,
  setValue: (e: string) => void
}

export const Message: FC<MessageProps> = ({ value, setValue }) => (
  <textarea
    value={value}
    onChange={(e) => setValue((e.target as any).value)}
    placeholder="Your message"
  />
);
