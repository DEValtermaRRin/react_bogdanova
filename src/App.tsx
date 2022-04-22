import React, { FC, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.scss';

import { ChatList } from './components/ChatList/ChatList';
import { Header } from './components/Header/Header';
import { Chats } from './pages/Chats';

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

export const App: FC = () => {
  const [chatList, setChatList] = useState<Chat[]>(initialChats);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} /> {/* index == path="" */}
          <Route path="profile" element={<Profile />} />
          <Route path="chats" element={<Chats />}>
            {/*  <Route
              index
              element={<ChatList chatList={chatList} onAddChat={setChatList} />}
            />*/}
          </Route>
        </Route>

        <Route path="*" element={<h2>404</h2>} />
      </Routes>
    </BrowserRouter>
  );
};
