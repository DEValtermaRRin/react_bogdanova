import React, { FC } from 'react';

interface UserProps {
  name: string,
  getName: (e: string) => void
}

export const User: FC<UserProps> = ({name, getName}) => (
  <input data-testid="user"
    value={name}
    onChange={(e) => getName(e.target.value)}
    type="text"
    placeholder="Your name?"
  />
);
