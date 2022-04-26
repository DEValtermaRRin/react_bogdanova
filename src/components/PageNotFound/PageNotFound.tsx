import React, { FC } from 'react';
import './PageNotFound.module.scss';

export const PageNotFound: FC = () => {
  return (
    <main>
      <p className="digits">404</p>
      <p className="digits__text">OOOOOOPS... Page not found</p>
      <button className="go-back" onClick={() => window.history.go(-1)}>
        return
      </button>
    </main>
  );
};
