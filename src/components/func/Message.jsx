import React from "react";

export const Message = (props) => {
  return (
    <div className="msg">
      {props.send.map((msg) => (
        <p>{msg}</p>
      ))}
    </div>
  );
};
