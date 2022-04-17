import React, { FC, useState, useEffect, useCallback } from 'react';
import { Form } from './components/Form/Form';
import { MessageList } from './components/MessageList/MessageList';
import { AUTHOR } from './constants';
import { nanoid } from 'nanoid';
import './App.css';


interface Msg {
  id?: string,
  author: string,
  value: string
}

export const App: FC = () => {
  const [messages, setMessages] = useState<Msg[]>([]);

  useEffect(() => {
    if (messages.length > 0 && messages[messages.length - 1].value === '') {
      const timeout = setTimeout(() => {
        setMessages([
          ...messages,
          {
            id: nanoid(),
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
            id: nanoid(),
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

  const addMessages = useCallback((value:string, userName: string) => {
    setMessages((prevMessage) => [
      ...prevMessage,
      {
        id: nanoid(),
        author: userName,
        value,
      },
    ]);
  }, []);

  return (
    <div className="container">
      <MessageList messages={messages} />
      <Form addMessages={addMessages} />
    </div>
  );
};
