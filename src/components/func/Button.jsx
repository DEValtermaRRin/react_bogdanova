import React from "react";

export const Button = (props) => {
  return <button className="btn" onClick={props.click}>{props.name}</button>;
};
