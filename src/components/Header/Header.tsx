import React, { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, NavLink, Link } from 'react-router-dom';
import { logOut } from 'src/services/firebase';

import { selectAuth } from 'store/profile/selectors';

import style from './Header.module.scss';

const navToolbar = [
  {
    id: 1,
    to: '/',
    name: 'Home',
  },
  {
    id: 2,
    to: '/profile',
    name: 'Profile',
  },
  {
    id: 3,
    to: '/chat',
    name: 'Chat',
  },
  {
    id: 4,
    to: '/about',
    name: 'About',
  },
  {
    id: 5,
    to: '/pictures',
    name: 'Pictures',
  },
];

/* NavLink / Link to == a href  (учебный момент)*/

export const Header: FC = () => {
  const auth = useSelector(selectAuth);
  const [error, setError] = useState('');

  const handleSignOut = async () => {
    setError('');
    try {
      await logOut();
    } catch (err) {
      setError((err as Error).message);
    }
  };

  return (
    <>
      <header className={style.header}>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <ul>
          {navToolbar.map((link) => (
            <li className={style.header_li} key={link.id}>
              <NavLink
                className={style.header__link}
                to={link.to}
                style={({ isActive }) => ({
                  color: isActive ? '#ccc' : '#284779',
                })}
              >
                {link.name}
              </NavLink>
            </li>
          ))}
          {auth ? (
            <button onClick={handleSignOut} className={style.header__link}>
              logout
            </button>
          ) : (
            <>
              <NavLink
                className={style.header__link}
                to="/signin"
                style={({ isActive }) => ({
                  color: isActive ? '#ccc' : '#284779',
                })}
              >
                Sign In
              </NavLink>
              <NavLink
                className={style.header__link}
                to="/signup"
                style={({ isActive }) => ({
                  color: isActive ? '#ccc' : '#284779',
                })}
              >
                Sign Up
              </NavLink>
            </>
          )}
        </ul>
      </header>

      <main>
        <Outlet />
      </main>
    </>
  );
};
