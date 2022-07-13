import React, { FC } from 'react';

// eslint-disable-next-line import/no-unresolved
import SendIcon from '@mui/icons-material/Send';
import LoadingButton from '@mui/lab/LoadingButton';

import { PropsType } from './types';

import { ReturnComponentType } from 'types';

export const CustomButton: FC<PropsType> = ({
  type,
  isDisabled,
  children,
}): ReturnComponentType => (
  <LoadingButton
    type={type}
    loading={isDisabled}
    disabled={isDisabled}
    loadingPosition="start"
    startIcon={<SendIcon />}
    variant="contained"
  >
    {children}
  </LoadingButton>
);
