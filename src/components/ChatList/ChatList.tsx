import { nanoid } from 'nanoid';
import React, { FC, useState } from 'react';
import { Chat } from '../../App';
import { ChatLinks } from './components/ChatLinks/ChatLinks';
import { ChatForm } from './components/ChatsForm/ChatsForm';
import './ChatList.scss';

interface ChatListProps {
  onAddChat: (chat: Chat) => void;
  chatList: Chat[];
  onDelChat: (chatName: string) => void
}

export const ChatList: FC<ChatListProps> = ({ onAddChat, chatList, onDelChat }) => {
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (name) {
      onAddChat({
        id: nanoid(),
        name,
      });

      setName('');
    }
  };

  return (
    <div className="chatlist">
      <ChatLinks chatList={chatList} onDelChat={onDelChat} />
      <ChatForm value={name} handleSubmit={handleSubmit} setName={setName} />
    </div>
  );
};
