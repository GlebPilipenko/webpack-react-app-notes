import React from 'react';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import { ReturnComponentType } from 'types';

export const AuthorField = ({
  value,
  onChange,
  hasFieldError,
}: any): ReturnComponentType => {
  return (
    <Box
      sx={{
        '& > :not(style)': { width: 562 },
      }}
    >
      <TextField
        id="outlined-basic"
        label="Подпись"
        value={value}
        onChange={onChange}
        error={hasFieldError}
        variant="outlined"
        required
      />
    </Box>
  );
};
