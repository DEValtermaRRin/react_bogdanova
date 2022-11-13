import React, { FC, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { MessageList } from './components/MessageList';
import { User } from './components/User';
import { Form } from './components/Form';
import { ShowUser } from './components/ShowUser';

import { selectChatList } from 'src/store/chatlist/selectors';
import { WithClasses } from 'src/HOC/WithClasses';

import style from './ChatWindow.module.scss';

export const ChatWindow: FC = () => {
  const { chatId } = useParams();
  const [userName, setUserName] = useState('');
  const MessageListWithClass = WithClasses(MessageList);

  const chatList = useSelector(
    selectChatList,
    // (prev, next) => prev.length === next.length,
  );

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
