import React from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import { NoteDataType, ReturnComponentType } from 'types';

export const Note = ({
  sign,
  text,
  date: { datetime },
}: NoteDataType): ReturnComponentType => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-start',
        flexWrap: 'wrap',
        gap: '16px',
        mb: '16px',
      }}
    >
      <Card variant="outlined" sx={{ flexBasis: '32%' }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {`Автор: ${sign}`}
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {`Дата: ${datetime}`}
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {`Запись: ${text}`}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};
