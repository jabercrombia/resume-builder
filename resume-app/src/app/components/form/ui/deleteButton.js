import React from 'react';
import Button from '@mui/material/Button';

const DeleteButton = ({ children, onClick }) => {
  return (
    <Button size="small" variant="outlined" onClick={onClick}>
      {children}
    </Button>
  );
};

export default DeleteButton;
