import React, { FC } from 'react';
import { Outlet, NavLink } from 'react-router-dom';

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
  <header>
    <ul>
      {navToolbar.map((link) => (
        <li key={link.id}>
          <NavLink
            to={link.to}
            style={({ isActive }) => ({ color: isActive ? 'green' : 'blue' })}
          >
            {link.name}
          </NavLink>
        </li>
      ))}
    </ul>

    <main>
      <Outlet />
    </main>
  </header>
);
