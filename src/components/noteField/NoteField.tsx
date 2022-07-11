import React from 'react';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import { ReturnComponentType } from 'types';

export const NoteField = ({ value, onChange }: any): ReturnComponentType => {
  return (
    <Box
      sx={{
        '& .MuiTextField-root': { width: '100%' },
      }}
    >
      <TextField
        id="outlined-multiline-flexible"
        label="Запись"
        rows={5}
        fullWidth
        aria-label="Запись"
        value={value}
        onChange={onChange}
        multiline
      />
    </Box>
  );
};
