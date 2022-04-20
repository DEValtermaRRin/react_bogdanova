import React, { FC } from 'react';
/* import { Button as ButtonUI } from '@mui/material';
import SendIcon from '@mui/icons-material/Send'; */

interface ButtonProps {
  disabled?: boolean;
  name?: string;
}

export const Button: FC<ButtonProps> = ({ name, disabled }) => (
  <button
    data-testid="button"
    className="btn btn-top"
    type="submit"
    disabled={disabled}
  >
    {' '}
    {name}
  </button>

  /*   <ButtonUI
    data-testid="button"
    className="btn btn-top"
    type="submit"
    disabled={disabled}
    size="small"
    variant="contained"
    endIcon={<SendIcon />}
  >
    {name}
  </ButtonUI> */
);
