import React, { FC } from 'react';
import './User.scss';

interface UserProps {
  name: string;
  getName: (e: string) => void;
}

export const User: FC<UserProps> = ({ name, getName }) => (
  <div className="user">
    <div className="user__icon"></div>
    <input
      className="user__input"
      data-testid="user"
      value={name}
      onChange={(e) => getName(e.target.value)}
      type="text"
      placeholder="Enter your name"
    />
  </div>
);
