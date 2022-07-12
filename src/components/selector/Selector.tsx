import React from 'react';

import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';

import { PropsType } from './types';

import { ReturnComponentType } from 'types';

export const Selector = ({
  value,
  regions,
  onChange,
}: PropsType): ReturnComponentType => (
  <Box
    sx={{
      '& .MuiTextField-root': { width: '25ch' },
    }}
  >
    <TextField
      id="outlined-select-currency"
      select
      label="Точное время по:"
      value={value}
      onChange={onChange}
    >
      {regions.map(region => (
        <MenuItem key={region} value={region}>
          {region}
        </MenuItem>
      ))}
    </TextField>
  </Box>
);
