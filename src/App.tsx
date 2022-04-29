import React, { FC, useState, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ChatList } from './components/ChatList/ChatList';
import { Header } from './components/Header/Header';
import { Home } from './pages/Home';
import { Profile } from './pages/Profile';

import { PageNotFound } from './components/PageNotFound/PageNotFound';
import { defaultContext, ThemeContext } from './utils/ThemeContext';

import style from './App.module.scss';
import { LoadingPage } from './components/LoadingPage/LoadingPage';
import { AboutWithConnect } from './pages/About';

const Workspace = React.lazy(() =>
  import('./pages/Workspace/Workspace').then((module) => ({
    default: module.Workspace,
  })),
);

export const App: FC = () => {
  const [theme, setTheme] = useState(defaultContext.theme);

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
                    <Route index element={<ChatList />} />
                    <Route path=":chatId" element={<Workspace />} />
                  </Route>
                  <Route path="about" element={<AboutWithConnect />} />
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
