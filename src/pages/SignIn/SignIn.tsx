import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux';

import { changeAuth } from 'store/profile/slice';

import style from './SignIn.module.scss';

export const SignIn: FC = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setError(false);
    if (login === 'admin' && password === 'admin') {
      dispatch(changeAuth(true));
    } else {
      setError(true);
    }
  };
  return (
    <>
      <h2 className={style.signin__title}>Sign In</h2>
      <form onSubmit={handleSubmit} className={style.signin__form}>
        <input
          type="text"
          onChange={(e) => setLogin(e.target.value)}
          value={login}
          placeholder="Enter login"
          className={style.signin__input}
        />
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          placeholder="Enter password"
          className={style.signin__input}
        />

        {error && <p style={{ color: 'red' }}>Неверный логин / пароль </p>}
        <button className={style.signin__button} type="submit">
          Sign in
        </button>
      </form>
    </>
  );
};
