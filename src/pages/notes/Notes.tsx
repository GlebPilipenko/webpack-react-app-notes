import React, { ChangeEvent, useState } from 'react';

import Box from '@mui/material/Box';
import TablePagination from '@mui/material/TablePagination';
import { useSelector } from 'react-redux';

import { Notification, NotesTable } from 'components';
import { NotificationColor } from 'enums';
import { selectNotes } from 'store/selectors';
import { Nullable, ReturnComponentType } from 'types';

export const Notes = (): ReturnComponentType => {
  const notes = useSelector(selectNotes);

  const [page, setPage] = useState(0);
  const [notesPerPage, setNotesPerPage] = useState(10);

  const handlePageChange = (
    event: Nullable<React.MouseEvent<HTMLButtonElement>>,
    newPage: number,
  ): void => {
    setPage(newPage);
  };

  const handleRowsPerPageChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ): void => {
    setNotesPerPage(Number(event.target.value));
    setPage(0);
  };

  if (notes.length === 0) {
    return (
      <Notification severity={NotificationColor.Warning}>
        Должна быть добавлена минимум одна заметка!
      </Notification>
    );
  }

  return (
    <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
      <NotesTable page={page} notes={notes} notesPerPage={notesPerPage} />

      <TablePagination
        rowsPerPageOptions={[10, 25, 50]}
        component="div"
        count={notes.length}
        rowsPerPage={notesPerPage}
        page={page}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleRowsPerPageChange}
      />
    </Box>
  );
};
