import React, { FC, useContext } from 'react';
import { ThemeContext } from '../utils/ThemeContext';

export const Profile: FC = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  // TODO добавить темы и стили + радиокнопка

  return (
    <>
      <h2>Profile</h2>
      <div>
        <p>{theme === 'dark' ? '🌙' : '🌞'} </p>
        <button onClick={toggleTheme}>change theme</button>
      </div>
    </>
  );
};
