import React, { FC } from 'react';

interface ButtonProps {
  disabled?: boolean,
  name?: string
}

export const Button: FC<ButtonProps> = ({ name, disabled }) => (
  <button className="btn btn-top" type="submit" disabled={disabled}>
    {name}
  </button>
);
