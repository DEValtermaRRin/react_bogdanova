// import React, { FC } from 'react';
// import { Outlet, NavLink } from 'react-router-dom';
// import './Header.scss';

// const navToolbar = [
//   {
//     id: 1,
//     to: '/',
//     name: 'Home',
//   },
//   {
//     id: 2,
//     to: '/profile',
//     name: 'Profile',
//   },
//   {
//     id: 3,
//     to: '/chat',
//     name: 'Chat',
//   },
// ];

// /* NavLink / Link to == a href  (учебный момент)*/

// export const Header: FC = () => (
//   <>
//     <header className="header">
//       <ul>
//         {navToolbar.map((link) => (
//           <li className="header__link" key={link.id}>
//             <NavLink
//               to={link.to}
//               style={({ isActive }) => ({
//                 color: isActive ? '#ccc' : '#284779',
//               })}
//             >
//               {link.name}
//             </NavLink>
//           </li>
//         ))}
//       </ul>
//     </header>
//     <main className="main">
//       <Outlet />
//     </main>
//   </>
// );
