import React, { FC } from 'react';
import style from './User.module.scss';

interface UserProps {
  name: string;
  getName: (e: string) => void;
}

export const User: FC<UserProps> = ({ name, getName }) => (
  <div className={style.user}>
    <div className={style.user__icon}></div>
    <input
      className={style.user__icon}
      data-testid="user"
      value={name}
      onChange={(e) => getName(e.target.value)}
      type="text"
      placeholder="Enter your name"
    />
  </div>

  
);
