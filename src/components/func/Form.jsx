import React, { useState } from "react";
import { Input } from "./Input";
import { Button } from "./Button";
import { Message } from "./Message";
import { ButtonClear } from "./ButtonClear";

export const Form = () => {
  const [name] = useState("Send message");
  const [value, setValue] = useState("");
  const [messages, setMessages] = useState([]);
  const [btnClear] = useState("Clear messages");

  const handleClick = () => {
    setMessages([...messages, value]);
    setValue("");
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const clearMessages = () => {
    setMessages([]);
  };

  return (
    <>
      <div className="container">
        <Input change={handleChange} value={value} />
        <Button name={name} click={handleClick} />
        <Message send={messages} />
        <ButtonClear name={btnClear} click={clearMessages} />
      </div>
    </>
  );
};
