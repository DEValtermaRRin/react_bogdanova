// import { nanoid } from 'nanoid';
import React, { FC, useMemo, useState, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import { Provider, useDispatch, useSelector } from 'react-redux';

import { ChatList } from './components/ChatList/ChatList';
import { Header } from './components/Header/Header';
import { Home } from './pages/Home';
import { Profile } from './pages/Profile';
// import { Workspace } from './pages/Workspace/Workspace';
import { PageNotFound } from './components/PageNotFound/PageNotFound';
import { defaultContext, ThemeContext } from './utils/ThemeContext';
// import { store } from './store';

import style from './App.module.scss';
import { LoadingPage } from './components/LoadingPage/LoadingPage';
// import { selectChatList } from './store/chatlist/selectors';
// import { addChat } from './store/chatlist/actions';

const Workspace = React.lazy(() =>
  import('./pages/Workspace/Workspace').then((module) => ({
    default: module.Workspace,
  })),
);

// export interface Chat {
//   id: string;
//   name: string;
// }

// export interface Message {
//   id: string;
//   author: string;
//   value: string;
// }

// const initialMessage: Messages = {
//   default: [
//     // {
//     //   id: '1',
//     //   author: 'Alice in Wonderland',
//     //   value: 'Всё чудесатее и чудесатее',
//     // },
//   ],
// };

// export interface Messages {
//   [key: string]: Message[] /* [key: string] - динамическая переменная */;
// }

export const App: FC = () => {
  // const [messages, setMessages] = useState<Messages>(initialMessage);
  const [theme, setTheme] = useState(defaultContext.theme);

  // const dispatch = useDispatch()
  // const chats = useSelector(selectChatList);


  // const chatList = useMemo(
  //   () =>
  //     Object.entries(messages)?.map((chat) => ({
  //       id: nanoid(),
  //       name: chat[0],
  //     })),
  //   [Object.entries(messages)?.length, messages],
  // );

  // const onAddChat = (chat: Chat) => {
  //   dispatch(addChat())
  //   // if (!messages[chat.name]) {
  //   //   setMessages({
  //   //     ...messages,
  //   //     [chat.name]: [],
  //   //   });
  //   // }
  //   // TODO вывести уведомление о том, что чат с таким именем уже есть
  // };

  // const onDelChat = (chatName: string) => {
  //   const allChats = { ...messages };
  //   delete allChats[chatName];
  //   setMessages({
  //     ...allChats,
  //   });
  // };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };
  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      <div className={style.container}>
        <div className={style.app}>
          <BrowserRouter>
            <Suspense fallback={<LoadingPage />}>
              <Routes>
                <Route path="/" element={<Header />}>
                  <Route index element={<Home />} /> {/* index == path="" */}
                  <Route path="profile" element={<Profile />} />
                  <Route path="chat">
                    <Route
                      index
                      element={
                        <ChatList
                          // // onDelChat={onDelChat}
                          // chatList={chatList}
                          // // onAddChat={onAddChat}
                        />
                      }
                    />
                    <Route
                      path=":chatId"
                      element={
                        <Workspace
                          // chatList={chatList}
                          // // onAddChat={onAddChat}
                          // messages={messages}
                          // setMessages={setMessages}
                          // // onDelChat={onDelChat}
                        />
                      }
                    />
                  </Route>
                </Route>
                <Route path="*" element={<PageNotFound />} />
              </Routes>
            </Suspense>
          </BrowserRouter>
        </div>
      </div>
    </ThemeContext.Provider>
  );
};
