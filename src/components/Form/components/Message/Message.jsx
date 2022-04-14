import React from 'react';
import './Message.css';

export const Message = ({ value, setValue }) => (
  <textarea
    value={value}
    onChange={(e) => setValue(e.target.value)}
    placeholder="Your message"
  />
);
