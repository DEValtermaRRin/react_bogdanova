import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, NavLink, Link } from 'react-router-dom';

import { selectAuth } from 'store/profile/selectors';
import { changeAuth } from 'store/profile/slice';

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
  const dispatch = useDispatch();
  const auth = useSelector(selectAuth);

  // const handleLogout = () => {
  //   auth
  // }
  return (
    <>
      <header className={style.header}>
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
            <button
              onClick={() => dispatch(changeAuth(false))}
              className={style.header__link}
            >
              logout
            </button>
          ) : (
            <Link className={style.header__link} to="/signin">
              Sign In
            </Link>
          )}
        </ul>
      </header>

      <main>
        <Outlet />
      </main>
    </>
  );
};
