import React from 'react';

import { Table, TableBody, TableContainer, TableRow } from '@mui/material';

import { PropsType } from './types';

import { Note } from 'components';
import { ReturnComponentType } from 'types';

export const NotesTable = ({
  page,
  notes,
  notesPerPage,
}: PropsType): ReturnComponentType => {
  const filteredNotes = notes.slice(
    page * notesPerPage,
    page * notesPerPage + notesPerPage,
  );
  const tableBody = filteredNotes.map(note => {
    return (
      <TableRow role="checkbox" tabIndex={-1} key={note.date.datetime}>
        <Note key={`${note.date.utc_datetime}`} {...note} />
      </TableRow>
    );
  });

  return (
    <TableContainer>
      <Table>
        <TableBody>{tableBody}</TableBody>
      </Table>
    </TableContainer>
  );
};
