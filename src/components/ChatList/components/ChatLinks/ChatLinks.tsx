import React, { FC } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { selectChats } from 'src/store/chatlist/selectors';
import { delChat } from 'src/store/chatlist/slice';

import style from './ChatLinks.module.scss';

export const ChatLinks: FC = () => {
  const chats = useSelector(selectChats, shallowEqual);
  const dispatch = useDispatch();

  return (
    <ul className={style.chatlinks}>
      {chats.map((chat) => (
        <li className={style.chatlink} key={chat.id}>
          <Link className={style.chatlnk} to={`/chat/${chat.name}`}>
            {chat.name}
          </Link>
          <button
            type="button"
            onClick={() => dispatch(delChat({ chatName: chat.name }))}
            className={style.chatdel}
          >
            &times;
          </button>
        </li>
      ))}
    </ul>
  );
};
