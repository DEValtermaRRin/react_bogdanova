// import { nanoid } from 'nanoid';
import React, { FC, useState } from 'react';
// import { Chat } from '../../App';
import { ChatLinks } from './components/ChatLinks/ChatLinks';
import { ChatForm } from './components/ChatsForm/ChatsForm';
import style from './ChatList.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { addChat } from '../../store/chatlist/actions';

// interface ChatListProps {
//   // onAddChat: (chat: Chat) => void;
//   // chatList: Chat[];
//   // onDelChat: (chatName: string) => void;
// }

export const ChatList: FC = ({
  // onAddChat,
  // chatList,
  // onDelChat,
}) => {
  const [name, setName] = useState('');

  const dispatch = useDispatch()



  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (name) {
      dispatch(addChat(name))
      // onAddChat({
      //   id: nanoid(),
      //   name,
      // });

      setName('');
    }
  };

  return (
    <div className={style.chatlist}>
      <ChatLinks /* chatList={chatList} onDelChat={onDelChat} */ />
      <ChatForm value={name} handleSubmit={handleSubmit} setName={setName} />
    </div>
  );
};
