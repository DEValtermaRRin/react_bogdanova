import React, { FC, useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { nanoid } from 'nanoid';
import { Form } from './components/Form/Form';
import { MessageList } from './components/MessageList/MessageList';
import { AUTHOR } from './constants';
import { User } from './components/User/User';
import { Messages } from '../../App';
import { ShowUser } from './components/ShowUser/ShowUser';
// import { WithClasses } from '../../HOC/WithClasses';
import style from './ChatWindow.module.scss';

interface ChatProps {
  messages: Messages;
  setMessages: React.Dispatch<React.SetStateAction<Messages>>;
}

export const ChatWindow: FC<ChatProps> = ({ messages, setMessages }) => {
  const { chatId } = useParams();
  const [userName, setUserName] = useState('');
  // const MessageListWithClass = WithClasses(MessageList)

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
    <div className={style.chat}>
      <div className={style.userform}>
        <User name={userName} getName={setUserName} />
        <ShowUser userName={userName} />
      </div>
      {/* <MessageListWithClass messages={chatId ? messages[chatId] : []} classes={styles.messagelist}/> */}
      <MessageList messages={chatId ? messages[chatId] : []} />
      <Form
        addMessages={addMessages}
        userName={userName}
        delMessages={delMessages}
      />
    </div>
  );
};
