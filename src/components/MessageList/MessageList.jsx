import React from "react";
export const MessageList = ({ messages }) => (
  <div className="msg">
    {messages.map((msg, idx) => (
      <p key={idx}>
        {msg.author}: {msg.value}
      </p>
    ))}
  </div>
);
