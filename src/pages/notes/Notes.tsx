import React from 'react';

import Box from '@mui/material/Box';
import { useSelector } from 'react-redux';

import { Note, Notification, Pagination } from 'components';
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
    <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-start',
          flexWrap: 'wrap',
          gap: '16px',
          mb: '16px',
        }}
      >
        {notes.map(note => (
          <Note key={`${note.date.utc_datetime}`} {...note} />
        ))}
      </Box>

      <Pagination notes={notes} />
    </Box>
  );
};
