import React from 'react';

import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';

import { PropsType } from './types';

import { ReturnComponentType } from 'types';

export const Selector = ({
  value,
  regions,
  onChange,
}: PropsType): ReturnComponentType => (
  <TextField
    sx={{ width: '30%' }}
    id="outlined-select-currency"
    select
    label="Точное время по"
    value={value}
    onChange={onChange}
    required
  >
    {regions.map(region => (
      <MenuItem key={region} value={region}>
        {region}
      </MenuItem>
    ))}
  </TextField>
);
