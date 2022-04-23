import React, { FC, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.scss';
import { Chat } from './components/Chat/Chat';

import { ChatList } from './components/ChatList/ChatList';
import { Header } from './components/Header/Header';

import { Home } from './pages/Home';
import { Profile } from './pages/Profile';

export interface Chat {
  id: string;
  name: string;
}

const initialChats: Chat[] = [
  {
    id: '1',
    name: 'chat',
  },
];
export interface Message {
  id: string;
  author: string;
  value: string;
}

export interface Messages {
  [key: string]: Message[] /* [key: string] - динамическая переменная */;
}
export const App: FC = () => {
  const [chatList, setChatList] = useState<Chat[]>(initialChats);
  const [messages, setMessages] = useState<Messages>({});
  const onAddChat = (chat: Chat) => {
    setChatList([...chatList, chat]);
    setMessages({
      ...messages,
      [chat.id]: [],
    })
  };
  return (
    <div className="container app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Home />} /> {/* index == path="" */}
            <Route path="profile" element={<Profile />} />
            <Route path="chats">
              <Route
                index
                element={
                  <ChatList chatList={chatList} onAddChat={onAddChat} />
                }
              />
              <Route
                path=":chatId"
                element={
                  <Chat
                    messages={messages}
                    setMessages={setMessages}
                    chatList={chatList}
                    onAddChat={onAddChat}
                  />
                }
              />
            </Route>
          </Route>

          <Route path="*" element={<h2>404</h2>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
