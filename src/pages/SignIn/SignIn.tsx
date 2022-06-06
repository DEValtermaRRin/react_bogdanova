import React, { FC, useState } from 'react';

import { logIn } from 'src/services/firebase';

import style from './SignIn.module.scss';

export const SignIn: FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setError('');
    try {
      await logIn(email, password);
    } catch (err) {
      setError((err as Error).message);
    }
  };
  return (
    <>
      <h2 className={style.signin__title}>Sign In</h2>
      <form onSubmit={handleSubmit} className={style.signin__form}>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
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

        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button className={style.signin__button} type="submit">
          Sign in
        </button>
      </form>
    </>
  );
};
