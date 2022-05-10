import React, { FC } from 'react';
import { ReactComponent as Person } from 'src/assets/Icons/person.svg';
import style from './User.module.scss';

export interface UserProps {
  name: string;
  getName: (e: string) => void;
}

export const User: FC<UserProps> = ({ name, getName }) => (
  <div className={style.user}>
    <div>
      <Person className={style.user__icon} />
    </div>
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
