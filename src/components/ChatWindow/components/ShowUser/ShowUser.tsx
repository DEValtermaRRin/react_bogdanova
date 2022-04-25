import React, { FC } from 'react';
import './ShowUser.scss';

interface ShowUserProps {
  userName: string;
}

export const ShowUser: FC<ShowUserProps> = ({ userName }) => (
  <p className="showuser">Hello, {userName}</p>
);
