import React, { FC } from 'react';
import { ReactComponent as Send } from 'src/assets/Icons/send.svg';
import style from './ButtonSend.module.scss';

export interface ButtonSendProps {
  disabled?: boolean;
  name?: string;
}

export const ButtonSend: FC<ButtonSendProps> = ({ disabled }) => (
  <button
    data-testid="button"
    className={style.btn__dark}
    type="submit"
    disabled={disabled}
  >
    <Send />
  </button>
);
