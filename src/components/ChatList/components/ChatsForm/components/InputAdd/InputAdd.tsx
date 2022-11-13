import React, { FC } from 'react';

import style from './InputAdd.module.scss';

export interface InputAddProps {
  name: string;
  setName: (e: string) => void;
}

export const InputAdd: FC<InputAddProps> = ({ name, setName }) => (
  <input
    className={style.inputAdd}
    type="text"
    value={name}
    onChange={(e) => setName(e.target.value)}
  />
);
