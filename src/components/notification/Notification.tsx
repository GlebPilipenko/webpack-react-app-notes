import React from 'react';

import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';

import { PropsType } from './types';

import { NotificationColor } from 'enums';
import { ReturnComponentType } from 'types';

export const Notification = ({
  severity,
  onClose,
  children,
}: PropsType): ReturnComponentType => {
  if (severity === NotificationColor.Warning) {
    return (
      <Box>
        <Alert variant="filled" severity={severity}>
          {children}
        </Alert>
      </Box>
    );
  }

  return (
    <Box>
      <Alert onClose={() => onClose(false)} variant="filled" severity={severity}>
        {children}
      </Alert>
    </Box>
  );
};
