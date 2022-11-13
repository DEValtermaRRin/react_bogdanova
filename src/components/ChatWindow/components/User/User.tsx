import React, { FC } from 'react';
import Person from 'src/assets/Icons/person.svg';
import style from './User.module.scss';

export interface UserProps {
  name: string;
  getName: (e: string) => void;
}

export const User: FC<UserProps> = ({ name, getName }) => (
  <div className={style.user}>
    <img className={style.user__icon} src={Person} alt="User" />
    <input
      className={style.user__input}
      data-testid="user"
      value={name}
      onChange={(e) => getName(e.target.value)}
      type="text"
      placeholder="Enter your name"
    />
  </div>
);
