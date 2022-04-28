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
  {
    id: 4,
    to: '/about',
    name: 'About',
  },
];

/* NavLink / Link to == a href  (учебный момент)*/

export const Header: FC = () => (
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
      </ul>
    </header>
    <main>
      <Outlet />
    </main>
  </>
);
