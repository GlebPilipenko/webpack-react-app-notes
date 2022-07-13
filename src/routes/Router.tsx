import React, { useEffect } from 'react';

import Box from '@mui/material/Box';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';

import { Path } from 'enums';
import { NoteForm, Notes } from 'pages';
import { ReturnComponentType } from 'types';

export const Router = (): ReturnComponentType => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === Path.Main) {
      navigate(Path.Form);
    }
  }, [navigate, pathname]);

  return (
    <Box sx={{ width: '80%', m: '0px auto' }}>
      <Routes>
        <Route path={Path.Form} element={<NoteForm />} />
        <Route path={Path.Notes} element={<Notes />} />
      </Routes>
    </Box>
  );
};
