import React, { FC, useState, useEffect, useCallback } from 'react';
import { Form } from './components/Form/Form';
import { MessageList } from './components/MessageList/MessageList';
import { AUTHOR } from './constants';
import { nanoid } from 'nanoid';
import { User } from './components/User/User';
import './ChatWindow.scss';

import { Messages } from '../../App';
import { useParams } from 'react-router-dom';
import { ShowUser } from './components/ShowUser/ShowUser';

interface ChatProps {
  messages: Messages;
  setMessages: React.Dispatch<React.SetStateAction<Messages>>;
}

export const ChatWindow: FC<ChatProps> = ({ messages, setMessages }) => {
  const { chatId } = useParams();
  const [userName, setUserName] = useState('');

  useEffect(() => {
    if (
      chatId &&
      messages[chatId]?.length > 0 &&
      messages[chatId][messages[chatId].length - 1].value === ''
    ) {
      const timeout = setTimeout(() => {
        setMessages({
          ...messages,
          [chatId]: [
            ...messages[chatId],
            {
              id: nanoid(),
              author: AUTHOR.BOT,
              value: 'You entered an empty message',
            },
          ],
        });
      }, 1500);

      return () => {
        clearTimeout(timeout);
      };
    }
    if (
      chatId &&
      messages[chatId]?.length > 0 &&
      messages[chatId][messages[chatId].length - 1].author !== AUTHOR.BOT
    ) {
      const timeout = setTimeout(() => {
        setMessages({
          ...messages,
          [chatId]: [
            ...messages[chatId],
            {
              id: nanoid(),
              author: AUTHOR.BOT,
              value: 'Some answer from bot',
            },
          ],
        });
      }, 1500);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [chatId, messages, setMessages]);

  const addMessages = useCallback(
    (value: string, userName: string) => {
      if (chatId) {
        setMessages((prevMessage) => ({
          ...prevMessage,
          [chatId]: [
            ...prevMessage[chatId],
            {
              id: nanoid(),
              author: userName,
              value,
            },
          ],
        }));
      }
    },
    [chatId, setMessages],
  );

  const delMessages = () => {
    if (chatId) {
      setMessages((prevChats) => ({
        ...prevChats,
        [chatId]: [],
      }));
    }
  };

  return (
    <div className="chat">
      <div className="userform">
        <User name={userName} getName={setUserName} />
        <ShowUser userName={userName} />
      </div>

      <MessageList messages={chatId ? messages[chatId] : []} />
      <Form
        addMessages={addMessages}
        userName={userName}
        delMessages={delMessages}
      />
    </div>
  );
};
