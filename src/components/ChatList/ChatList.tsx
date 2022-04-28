import React, { FC } from 'react';

import { ChatLinks } from './components/ChatLinks/ChatLinks';
import { ChatForm } from './components/ChatsForm/ChatsForm';
import style from './ChatList.module.scss';

export const ChatList: FC = () => (
  <div className={style.chatlist}>
    <ChatLinks />
    <ChatForm />
  </div>
);
