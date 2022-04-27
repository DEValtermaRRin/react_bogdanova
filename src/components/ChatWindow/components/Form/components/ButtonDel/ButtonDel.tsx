import React, { FC } from 'react';
import style from './ButtonDell.module.scss';

interface ButtonDelProps {
  delMessages: () => void;
}

export const ButtonDel: FC<ButtonDelProps> = ({ delMessages }) => (
  <button className={style.delbutton} onClick={delMessages} type="button">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 96 96"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <path d="m24,78c0,4.968 4.029,9 9,9h30c4.968,0 9-4.032 9-9l6-48h-60l6,48zm33-39h6v39h-6v-39zm-12,0h6v39h-6v-39zm-12,0h6v39h-6v-39zm43.5-21h-19.5c0,0-1.344-6-3-6h-12c-1.659,0-3,6-3,6h-19.5c-2.487,0-4.5,2.013-4.5,4.5s0,4.5 0,4.5h66c0,0 0-2.013 0-4.5s-2.016-4.5-4.5-4.5z" />
    </svg>
  </button>
);