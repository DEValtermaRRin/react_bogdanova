import React, { FC, useState, useEffect, useCallback } from 'react';
import { Form } from './components/Form/Form';
import { MessageList } from './components/MessageList/MessageList';
import { AUTHOR } from './constants';
import { nanoid } from 'nanoid';
import { User } from './components/User/User';
import './Chat.scss';
import { ChatList } from '../ChatList/ChatList';
import { Chat as OneChat, Message, Messages } from '../../App';
import { useParams } from 'react-router-dom';

interface ChatsProps {
  messages: Messages;
  setMessages: React.Dispatch<React.SetStateAction<Messages>>;
  chatList: OneChat[];
  onAddChat: (chat: OneChat) => void;
}

export const Chat: FC<ChatsProps> = ({
  chatList,
  onAddChat,
  messages,
  setMessages,
}) => {
  const { chatId } = useParams();
  const [userName, setUserName] = useState('');

  useEffect(() => {
    if (
      chatId &&
      messages[chatId].length > 0 &&
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
      messages[chatId].length > 0 &&
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
  }, [messages]);

  const addMessages = useCallback((value: string, userName: string) => {
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
  }, [chatId, setMessages]);
  // TODO разобраться с удалением!!!!
  const delMessages = () => {
    if (chatId) {
      setMessages({});
    }
    
  };
  // TODO сделать чтобы автор отрисовывался справа, а в инпуте исчезал и ничего не падало!!!
  return (
    <div className="chat">
      <ChatList chatList={chatList} onAddChat={onAddChat} />
      <User name={userName} getName={setUserName} />
      <MessageList messages={chatId ? messages[chatId] : []} />
      <Form
        addMessages={addMessages}
        userName={userName}
        delMessages={delMessages}
      />
    </div>
  );
};
