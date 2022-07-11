import React from 'react';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import { useFieldValue } from 'hooks';
import { ReturnComponentType } from 'types';

export const NoteField = (): ReturnComponentType => {
  const [noteValue, onNoteValueChange] = useFieldValue('');

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
        value={noteValue}
        onChange={onNoteValueChange}
        multiline
      />
    </Box>
  );
};
