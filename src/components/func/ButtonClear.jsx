import React from "react";

export const ButtonClear = (props) => {
  return <button className="btn btn-top" onClick={props.click}>{props.name}</button>;
};
