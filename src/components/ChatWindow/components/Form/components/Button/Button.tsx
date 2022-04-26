import React, { FC } from 'react';
import style from './Button.module.scss';

interface ButtonProps {
  disabled?: boolean;
  name?: string;
}

export const Button: FC<ButtonProps> = ({ disabled }) => (
  <button
    data-testid="button"
    className={style.btn}
    type="submit"
    disabled={disabled}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="ionicon"
      viewBox="0 0 512 512"
    >
      <title>Enter your name</title>
      <path d="M470.3 271.15L43.16 447.31a7.83 7.83 0 01-11.16-7V327a8 8 0 016.51-7.86l247.62-47c17.36-3.29 17.36-28.15 0-31.44l-247.63-47a8 8 0 01-6.5-7.85V72.59c0-5.74 5.88-10.26 11.16-8L470.3 241.76a16 16 0 010 29.39z" />
    </svg>
  </button>
);
