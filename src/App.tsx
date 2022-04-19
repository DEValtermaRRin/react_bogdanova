import React, { FC } from 'react';

import './App.scss';
import { Chat } from './components/Chat/Chat';
import { ChatList } from './components/ChatList/ChatList';

export const App: FC = () => (
  <div className="container app">
    <ChatList />
    <Chat />
  </div>
);
