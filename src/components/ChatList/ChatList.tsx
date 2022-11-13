import React, { FC } from 'react';
import { ChatLinks } from './components/ChatLinks';
import { ChatForm } from './components/ChatsForm';

import style from './ChatList.module.scss';

export const ChatList: FC = () => (
  <div className={style.chatlist}>
    <ChatLinks />
    <ChatForm />
  </div>
);
