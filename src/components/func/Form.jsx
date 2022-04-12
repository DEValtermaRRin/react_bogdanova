import React, { useState } from "react";

export const Form = ({ addMessages }) => {
  const [name] = useState("Send message");
  const [value, setValue] = useState("");
  const [userName, setUserName] = useState("");

  const handleClickSubmit = (e) => {
    e.preventDefault();
    addMessages(value, userName);
    setValue("");

  };

  return (
    <form onSubmit={handleClickSubmit} className="container">
      <input
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        type="text"
				placeholder="Your name? "
      />
      <textarea 
				value={value} 
				onChange={(e) => setValue(e.target.value)}
				placeholder="Your message" />
      <button type="submit" className="btn btn-top">
        {name}
      </button>
    </form>
  );
};
