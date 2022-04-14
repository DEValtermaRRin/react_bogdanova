import React from 'react';

export const Message = ({ value, setValue }) => (
  <textarea
    value={value}
    onChange={(e) => setValue(e.target.value)}
    placeholder="Your message"
  />
);
