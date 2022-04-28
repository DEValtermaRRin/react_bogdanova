import React, { FC } from 'react';
import { ChatWindow } from '../../components/ChatWindow/ChatWindow';
import { ChatList } from '../../components/ChatList/ChatList';
import { Navigate, useParams } from 'react-router-dom';
import style from './Workspace.module.scss';
import { selectChats } from '../../store/chatlist/selectors';
import { shallowEqual, useSelector } from 'react-redux';

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
