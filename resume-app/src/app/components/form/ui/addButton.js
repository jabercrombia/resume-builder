import React from 'react';
import Button from '@mui/material/Button';
import { buttonTracking } from "../../analytics";

const AddButton = ({ children, onClick, text }) => {
  buttonTracking(text);

  return (
    <Button size="small" variant="outlined" onClick={onClick}>
      {children}
    </Button>
  );
};

export default AddButton;
