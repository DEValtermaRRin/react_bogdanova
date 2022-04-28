import React, { FC, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Form } from './components/Form/Form';
import { MessageList } from './components/MessageList/MessageList';
import { User } from './components/User/User';
import { ShowUser } from './components/ShowUser/ShowUser';
import { WithClasses } from '../../HOC/WithClasses';
import style from './ChatWindow.module.scss';
import { useSelector } from 'react-redux';
import { selectChatList } from '../../store/chatlist/selectors';

export const ChatWindow: FC = () => {
  const { chatId } = useParams();
  const [userName, setUserName] = useState('');
  const MessageListWithClass = WithClasses(MessageList);

  const chatList = useSelector(
    selectChatList/* ,
    (prev, next) => prev.length === next.length, */
  );

  //  ^
  //  |   при проверке не добавляются сообщения


  // закомментированный бот, который ждет своего часа

  /*   useEffect(() => {
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
  }, [chatId, messages, setMessages]); */

  return (
    <div className={style.chat}>
      <div className={style.userform}>
        <User name={userName} getName={setUserName} />
        <ShowUser userName={userName} />
      </div>
      <MessageListWithClass
        messages={chatId ? chatList[chatId] : []}
        classes={style.messagelist}
      />
      <Form userName={userName} />
    </div>
  );
};
