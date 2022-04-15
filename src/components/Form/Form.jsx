import React, { useState } from 'react';
import { Button } from './components/Button/Button';
import { Message } from './components/Message/Message';
import { User } from './components/User/User';

export const Form = ({ addMessages }) => {
  const [name] = useState('Send message');
  const [value, setValue] = useState('');
  const [userName, setUserName] = useState('');

  const handleClickSubmit = (e) => {
    e.preventDefault();
    addMessages(value, userName);
    setValue('');
  };

  return (
    <form onSubmit={handleClickSubmit} className='container'>
      <User name={userName} getName={setUserName} />
      <Message value={value} setValue={setValue} />
      <Button disabled={!userName} name={name} />
    </form>
  );
};
