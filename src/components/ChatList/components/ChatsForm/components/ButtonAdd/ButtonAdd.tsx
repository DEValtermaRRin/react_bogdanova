import React, { FC } from 'react';

import style from './ButtonAdd.module.scss';

export const ButtonAdd: FC = () => (
  <button className={style.buttonAdd} type="submit">
    +
  </button>
);
