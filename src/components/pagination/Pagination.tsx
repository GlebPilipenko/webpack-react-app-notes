import React, { ChangeEvent, useState } from 'react';

import TablePagination from '@mui/material/TablePagination';

import { NoteDataType, Nullable, ReturnComponentType } from 'types';

export const Pagination = ({ notes }: { notes: NoteDataType[] }): ReturnComponentType => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handlePageChange = (
    event: Nullable<React.MouseEvent<HTMLButtonElement>>,
    newPage: number,
  ): void => {
    setPage(newPage);
  };

  const handleRowsPerPageChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ): void => {
    setRowsPerPage(Number(event.target.value));
    setPage(0);
  };

  return (
    <TablePagination
      component="div"
      count={notes.length}
      rowsPerPage={rowsPerPage}
      page={page}
      onPageChange={handlePageChange}
      onRowsPerPageChange={handleRowsPerPageChange}
    />
  );
};
