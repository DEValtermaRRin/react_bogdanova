import React, { FC } from 'react';

import { Navigate, useParams } from 'react-router-dom';

import { shallowEqual, useSelector } from 'react-redux';
import style from './Workspace.module.scss';
import { selectChats } from 'src/store/chatlist/selectors';
import { ChatList } from 'src/components/ChatList/ChatList';
import { ChatWindow } from 'src/components/ChatWindow/ChatWindow';

export const Workspace: FC = () => {
  const chats = useSelector(selectChats, shallowEqual);
  const { chatId } = useParams();


  if (!chats.find((chat) => chat.name === chatId)) {
    return <Navigate replace to="/chat" />;
  }
  return (
    <div className={style.workspace}>
      <ChatList />
      <ChatWindow />
    </div>
  );
};
