import React, { FC, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { AboutWithConnect } from 'src/pages/About';
import { Home } from 'src/pages/Home';
import { Profile } from 'src/pages/Profile';
import { ChatList } from '../ChatList/ChatList';
import { Header } from '../Header/Header';
import { LoadingPage } from '../LoadingPage/LoadingPage';
import { PageNotFound } from '../PageNotFound/PageNotFound';
import style from './AppRouter.module.scss';

const Workspace = React.lazy(() =>
  import('src/pages/Workspace/Workspace').then((module) => ({
    default: module.Workspace,
  })),
);

// TODO исправить все пути, добавив индексы

export const AppRouter: FC = () => (
  <div className={style.container}>
    <div className={style.app}>
      <Suspense fallback={<LoadingPage />}>
        <BrowserRouter>
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
        </BrowserRouter>
      </Suspense>
    </div>
  </div>
);
