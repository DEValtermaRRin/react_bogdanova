import React, { FC, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Form } from './components/Form/Form';
import { MessageList } from './components/MessageList/MessageList';
import { User } from './components/User/User';
import { ShowUser } from './components/ShowUser/ShowUser';
import style from './ChatWindow.module.scss';
import { useSelector } from 'react-redux';
import { selectChatList } from 'src/store/chatlist/selectors';
import { WithClasses } from 'src/HOC/WithClasses';


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
