import React, { FC } from 'react';
import style from './PageNotFound.module.scss';

export const PageNotFound: FC = () => {
  return (
    <main>
      <p className={style.digits}>404</p>
      <p className={style.digits__text}>OOOOOOPS... Page not found</p>
      <button className={style.goBack} onClick={() => window.history.go(-1)}>
        return
      </button>
    </main>
  );
};
