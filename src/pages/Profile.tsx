import React, { FC, useContext, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { selectName, selectVisible } from 'src/store/profile/selectors';
import { changeName, toggleProfile } from 'src/store/profile/slice';
import { ThemeContext } from 'src/utils/ThemeContext';

export const Profile: FC = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const dispatch = useDispatch();
  const [value, setValue] = useState('');

  const visible = useSelector(selectVisible, shallowEqual);
  const name = useSelector(selectName, shallowEqual);

  // TODO добавить темы и стили + радиокнопка
  return (
    <>
      <h2>Profile</h2>
      <div>
        <p>{theme === 'dark' ? '🌙' : '🌞'} </p>
        <button onClick={toggleTheme}>change theme</button>
      </div>
      <hr />
      <div>
        <input type="checkbox" checked={visible} readOnly />
        <button onClick={() => dispatch(toggleProfile())}>
          change visible
        </button>
        <br />
        <p>{name}</p>
        <input
          type="text"
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        <button onClick={() => dispatch(changeName(value))}>change name</button>
      </div>
    </>
  );
};
