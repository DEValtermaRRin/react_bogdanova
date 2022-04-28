import React, { FC } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { delChat } from '../../../../store/chatlist/actions';
import { selectChats } from '../../../../store/chatlist/selectors';
import style from './ChatLinks.module.scss';

export const ChatLinks: FC = () => {
  const chats = useSelector(selectChats, shallowEqual);
  const dispatch = useDispatch();

  return (
    <ul className={style.chatlinks}>
      {chats.map((chat) => (
        <li className={style.chatlink} key={chat.id}>
          <Link to={`/chat/${chat.name}`}>{chat.name}</Link>
          <button
            type="button"
            onClick={() => dispatch(delChat(chat.name))}
            className={style.chatdel}
          >
            <svg
              width="17px"
              height="17px"
              viewBox="0 0 17 17"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <title>close</title>
              <g
                id="Icons"
                stroke="none"
                strokeWidth="1"
                fill="none"
                fillRule="evenodd"
                strokeLinecap="round"
              >
                <g
                  id="24-px-Icons"
                  transform="translate(-364.000000, -124.000000)"
                  stroke="#ffffff"
                >
                  <g
                    id="ic_cancel"
                    transform="translate(360.000000, 120.000000)"
                  >
                    <g id="cross">
                      <g
                        transform="translate(5.000000, 5.000000)"
                        strokeWidth="2"
                      >
                        <path d="M0,0 L14.1421356,14.1421356" id="Line"></path>
                        <path d="M14,0 L1.77635684e-15,14" id="Line"></path>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </button>
        </li>
      ))}
    </ul>
  );
};
