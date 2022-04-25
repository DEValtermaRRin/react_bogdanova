import React, { FC } from 'react';
import { ChatWindow } from '../../components/ChatWindow/ChatWindow';
import { ChatList } from '../../components/ChatList/ChatList';
import { Chat, Messages } from '../../App';
import { Navigate, useParams } from 'react-router-dom';
import './Workspace.scss';

interface WorkspaceProps {
  chatList: Chat[];
  onAddChat: (chat: Chat) => void;
  messages: Messages;
  setMessages: React.Dispatch<React.SetStateAction<Messages>>;
  onDelChat: (chatName: string) => void
}

export const Workspace: FC<WorkspaceProps> = ({
  chatList,
  onAddChat,
  messages,
  setMessages,
  onDelChat,
}) => {
  const { chatId } = useParams();
  if (!chatList.find((chat) => chat.name === chatId)) {
    return <Navigate replace to="/chat" />;
  }
  return (
    <div className="workspace">
      <ChatList  chatList={chatList} onAddChat={onAddChat} onDelChat={onDelChat} />
      <ChatWindow messages={messages} setMessages={setMessages} />
    </div>
  );
};
