import React from "react";

export const User = ({ name, getName }) => (
  <input
    value={name}
    onChange={(e) => getName(e.target.value)}
    type="text"
    placeholder="Your name? "
  />
);
