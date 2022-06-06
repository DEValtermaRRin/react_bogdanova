import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signUp } from 'src/services/firebase';
import { changeAuth } from 'src/store/profile/slice';

import style from './SignUp.module.scss';

export const SignUp: FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');

    try {
      await signUp(email, password);
      dispatch(changeAuth(true));
      navigate('/signin');
    } catch (err) {
      setError((err as Error).message);
    }
  };
  return (
    <>
      <h2 className={style.signin__title}>Sign Up</h2>
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
          Sign up
        </button>
      </form>
    </>
  );
};
