import React from 'react';
import Button from '@mui/material/Button';
import { buttonTracking } from "../../analytics";

const buttonStyle = {
  borderColor: 'white',
  color: 'white'
};

const DeleteButton = ({ children, onClick, text }) => {
  buttonTracking(text);

  return (
    <Button size="small" variant="outlined" onClick={onClick}  style={buttonStyle}>
      {children}
    </Button>
  );
};

export default DeleteButton;
