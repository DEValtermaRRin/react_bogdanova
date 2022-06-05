import React, { FC, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { ChatList } from '../ChatList';
import { Header } from '../Header';
import { LoadingPage } from '../LoadingPage';
import { PageNotFound } from '../PageNotFound';
import { PublicRoute } from '../PublicRoute';
import { PrivateRoute } from '../PrivateRoute';
import { AboutWithConnect } from 'src/pages/About';
import { SignIn } from 'src/pages/SignIn';
import { SignUp } from 'src/pages/SignUp';

import style from './AppRouter.module.scss';

const Workspace = React.lazy(() =>
  Promise.all([
    import('src/pages/Workspace').then(({ Workspace }) => ({
      default: Workspace,
    })),
    new Promise((resolve) => setTimeout(resolve)),
  ]).then(([moduleExports]) => moduleExports),
);

const Profile = React.lazy(() =>
  Promise.all([
    import('src/pages/Profile').then(({ Profile }) => ({
      default: Profile,
    })),
    new Promise((resolve) => setTimeout(resolve, 1000)),
  ]).then(([moduleExports]) => moduleExports),
);

const Home = React.lazy(() =>
  Promise.all([
    import('src/pages/Home').then(({ Home }) => ({
      default: Home,
    })),
    new Promise((resolve) => setTimeout(resolve, 1000)),
  ]).then(([moduleExports]) => moduleExports),
);

const Pictures = React.lazy(() =>
  Promise.all([
    import('src/pages/Pictures').then(({ Pictures }) => ({
      default: Pictures,
    })),
    new Promise((resolve) => setTimeout(resolve, 1000)),
  ]).then(([moduleExports]) => moduleExports),
);

export const AppRouter: FC = () => (
  <div className={style.container}>
    <div className={style.app}>
      <Suspense fallback={<LoadingPage />}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Header />}>
              <Route index element={<Home />} /> {/* index == path="" */}
              <Route
                path="profile"
                element={<PrivateRoute component={<Profile />} />}
              />
              <Route path="chat" element={<PrivateRoute />}>
                <Route index element={<ChatList />} />
                <Route path=":chatId" element={<Workspace />} />
              </Route>
              <Route path="about" element={<AboutWithConnect />} />
              <Route path="pictures" element={<Pictures />} />
              <Route
                path="signin"
                element={<PublicRoute component={<SignIn />} />}
              />
              <Route path="signup" element={<SignUp />} />
            </Route>
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </div>
  </div>
);
