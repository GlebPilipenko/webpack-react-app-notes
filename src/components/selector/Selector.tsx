import React from 'react';

import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';

import { ReturnComponentType } from 'types';

const regions = [{ region: 'Asia' }, { region: 'Europe' }];

export const Selector = ({ value, onChange }: any): ReturnComponentType => {
  return (
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
        {regions.map(option => (
          <MenuItem key={option.region} value={option.region}>
            {option.region}
          </MenuItem>
        ))}
      </TextField>
    </Box>
  );
};
