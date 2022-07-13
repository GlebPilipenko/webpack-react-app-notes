import React from 'react';

import Box from '@mui/material/Box';
import { useSelector } from 'react-redux';

import { Note, Notification } from 'components';
import { NotificationColor } from 'enums';
import { selectNotes } from 'store/selectors';
import { ReturnComponentType } from 'types';

export const Notes = (): ReturnComponentType => {
  const notes = useSelector(selectNotes);

  if (notes.length === 0) {
    return (
      <Notification severity={NotificationColor.Warning}>
        Должна быть добавлена минимум одна заметка!
      </Notification>
    );
  }

  return (
    <Box sx={{ maxWidth: 1000 }}>
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '10px',
          margin: '0 auto',
        }}
      >
        {notes.map(note => (
          <Note key={`${note.date.unixtime}`} {...note} />
        ))}
      </Box>
    </Box>
  );
};
