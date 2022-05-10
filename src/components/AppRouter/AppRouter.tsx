import React, { FC, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { ChatList } from '../ChatList';
import { Header } from '../Header';
import { LoadingPage } from '../LoadingPage';
import { PageNotFound } from '../PageNotFound';

import style from './AppRouter.module.scss';

const Workspace = React.lazy(() =>
  import('src/pages/Workspace').then((module) => ({
    default: module.Workspace,
  })),
);

const Profile = React.lazy(() =>
  import('src/pages/Profile').then((module) => ({
    default: module.Profile,
  })),
);

const AboutWithConnect = React.lazy(() =>
  import('src/pages/About').then((module) => ({
    default: module.AboutWithConnect,
  })),
);

const Home = React.lazy(() =>
  import('src/pages/Home').then((module) => ({
    default: module.Home,
  })),
);

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
