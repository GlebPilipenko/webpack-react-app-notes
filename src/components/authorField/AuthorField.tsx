import React from 'react';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import { PropsType } from './types';

import { ReturnComponentType } from 'types';

export const AuthorField = ({
  author,
  onChange,
  hasFieldError,
}: PropsType): ReturnComponentType => {
  return (
    <Box
      sx={{
        '& > :not(style)': { width: 562 },
      }}
    >
      <TextField
        id="outlined-basic"
        label="Подпись"
        value={author}
        onChange={onChange}
        error={hasFieldError}
        variant="outlined"
        required
      />
    </Box>
  );
};
