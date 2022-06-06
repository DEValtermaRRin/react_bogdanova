import React, { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { Chat } from 'src/store/chatlist/types';
import { chatsRef, getChatsById } from 'src/services/firebase';
import { onValue, remove } from 'firebase/database';

import style from './ChatLinks.module.scss';

export const ChatLinks: FC = () => {
  const [chats, setChats] = useState<Chat[]>([]);

  useEffect(() => {
    onValue(chatsRef, (chatsSnap) => {
      const newChats: Chat[] = [];
      chatsSnap.forEach((snapshot) => {
        newChats.push(snapshot.val());
      });
      setChats(newChats);
    });
  }, []);
  const handleDeleteChat = (id: string) => {
    remove(getChatsById(id));
  };

  return (
    <ul className={style.chatlinks}>
      {chats.map((chat) => (
        <li className={style.chatlink} key={chat.id}>
          <Link className={style.chatlnk} to={`/chat/${chat.name}`}>
            {chat.name}
          </Link>
          <button
            type="button"
            onClick={() => handleDeleteChat(chat.id)}
            className={style.chatdel}
          >
            &times;
          </button>
        </li>
      ))}
    </ul>
  );
};
