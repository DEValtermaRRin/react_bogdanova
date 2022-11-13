import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import DelChat from 'src/assets/Icons/delChat.svg';
import { delMessages } from 'src/store/chatlist/slice';

import style from './ButtonDell.module.scss';

export const ButtonDel: FC = () => {
  const dispatch = useDispatch();
  const { chatId } = useParams();

  const handleClick = () => {
    if (chatId) {
      dispatch(delMessages({ chatId }));
    }
  };
  return (
    <button
      className={style.delbutton__dark}
      onClick={() => handleClick()}
      type="button"
    >
      <img className={style.delChat__dark} src={DelChat} alt="delete chat" />
    </button>
  );
};
