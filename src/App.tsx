import { nanoid } from 'nanoid';
import React, { FC, useMemo, useState } from 'react';
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

export interface Message {
  id: string;
  author: string;
  value: string;
}

const initialMessage: Messages = {
  default: [
    {
      id: '1',
      author: 'Alice in Wonderland',
      value: 'Всё чудесатее и чудесатее',
    },
  ],
};

export interface Messages {
  [key: string]: Message[] /* [key: string] - динамическая переменная */;
}
export const App: FC = () => {
  const [messages, setMessages] = useState<Messages>(initialMessage);

  const chatList = useMemo(
    () =>
      Object.entries(messages)?.map((chat) => ({
        id: nanoid(),
        name: chat[0],
      })),
    [Object.entries(messages)?.length, messages],
  );

  const onAddChat = (chat: Chat) => {
    setMessages({
      ...messages,
      [chat.name]: [],
    });
  };
  return (
    <div className="container app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Home />} /> {/* index == path="" */}
            <Route path="profile" element={<Profile />} />
            <Route path="chat">
              <Route
                index
                element={<ChatList chatList={chatList} onAddChat={onAddChat} />}
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
