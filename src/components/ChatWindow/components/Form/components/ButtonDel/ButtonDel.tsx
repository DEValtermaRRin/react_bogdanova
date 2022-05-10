import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { ReactComponent as DelChat } from 'src/assets/Icons/delChat.svg';
import { delMessage } from 'src/store/chatlist/actions';

import style from './ButtonDell.module.scss';

export const ButtonDel: FC = () => {
  const dispatch = useDispatch();
  const { chatId } = useParams();

  const handleClick = () => {
    if (chatId) {
      dispatch(delMessage(chatId));
    }
  };
  return (
    <button
      className={style.delbutton__dark}
      onClick={() => handleClick()}
      type="button"
    >
      <DelChat className={style.delChat__dark} />
    </button>
  );
};
