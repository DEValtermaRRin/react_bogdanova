import { onValue, update } from 'firebase/database';
import React, { FC, useContext, useEffect, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { userRef } from 'src/services/firebase';
import { selectName, selectVisible } from 'src/store/profile/selectors';
import { changeName, toggleProfile } from 'src/store/profile/slice';
import { ThemeContext } from 'src/utils/ThemeContext';

export const Profile: FC = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const dispatch = useDispatch();
  const [value, setValue] = useState('');

  const visible = useSelector(selectVisible, shallowEqual);
  const name = useSelector(selectName, shallowEqual);

  useEffect(() => {
    onValue(userRef, (snapshot) => {
      const user = snapshot.val();
      dispatch(changeName(user.name || ''));
    });
  }, []);

  const handleChangeName = async () => {
    // set - чтобы полностью перезаписать данные
    update(userRef, {
      name: value,
    });
    setValue('');
  };

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
        <button onClick={handleChangeName}>change name</button>
      </div>
    </>
  );
};
