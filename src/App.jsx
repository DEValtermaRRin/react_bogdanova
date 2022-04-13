import React, { useState, useEffect } from 'react';
import './App.css';
import { Form } from './components/func/Form';
import { MessageList } from './components/func/MessageList';
import { AUTHOR } from './constants';

export const App = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (messages.length > 0 && messages[messages.length - 1].value === '') {
      const timeout = setTimeout(() => {
        setMessages([
          ...messages,
          {
            author: AUTHOR.BOT,
            value: 'You entered an empty message',
          },
        ]);
      }, 1500);

      return () => {
        clearTimeout(timeout);
      };
    }
    if (
      messages.length > 0 &&
      messages[messages.length - 1].author !== AUTHOR.BOT
    ) {
      const timeout = setTimeout(() => {
        setMessages([
          ...messages,
          {
            author: AUTHOR.BOT,
            value: 'some answer from bot',
          },
        ]);
      }, 1500);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [messages]);

  const addMessages = (value, userName) => {
    setMessages([
      ...messages,
      {
        author: userName,
        value,
      },
    ]);
  };

  return (
    <div className="container">
      <MessageList messages={messages} />
      <Form addMessages={addMessages} />
    </div>
  );
};
