import React from "react";

export const Button = ({ name, disabled }) => (
  <button className="btn btn-top" type="submit" disabled={disabled}>
    {name}
  </button>
);
