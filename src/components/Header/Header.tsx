import React, { FC } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
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
];

/* NavLink / Link to == a href  (учебный момент)*/

export const Header: FC = () => (
  <>
    <header className={style.header}>
      <ul>
        {navToolbar.map((link) => (
          <li className={style.header__link} key={link.id}>
            <NavLink
              to={link.to}
              style={({ isActive }) => ({
                color: isActive ? '#ccc' : '#284779',
              })}
            >
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </header>
    <main>
      <Outlet />
    </main>
  </>
);
