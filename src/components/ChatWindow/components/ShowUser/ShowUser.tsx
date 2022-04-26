import React, { FC } from 'react';
import style from './ShowUser.module.scss';

interface ShowUserProps {
  userName: string;
}

export const ShowUser: FC<ShowUserProps> = ({ userName }) => (
  <p className={style.showuser}>Hello, {userName}</p>
);
