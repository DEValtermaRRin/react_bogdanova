import React, {FC} from 'react';


interface Msg {
  id?: string,
  author: string,
  value: string
}

interface MessageListProps {
  messages: Msg[] // Array<Msg>  -- комментарий оставлен в учебных целях
}

export const MessageList: FC<MessageListProps> = ({ messages }) => (
  <div data-testid='messageList' className="msg">
    {messages.map((msg) => (
      <p key={msg.id}>
        {msg.author}: {msg.value}
      </p>
    ))}
  </div>
);
