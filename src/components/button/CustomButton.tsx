import React, { FC } from 'react';

// eslint-disable-next-line import/no-unresolved
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';

import { PropsType } from './types';

import { ReturnComponentType } from 'types';

export const CustomButton: FC<PropsType> = ({
  type,
  isDisabled,
  children,
}): ReturnComponentType => {
  return (
    <Button type={type} disabled={isDisabled} variant="contained" endIcon={<SendIcon />}>
      {children}
    </Button>
  );
};
