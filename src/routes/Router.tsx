import React, { useEffect } from 'react';

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
    <Routes>
      <Route path={Path.Form} element={<NoteForm />} />
      <Route path={Path.Notes} element={<Notes />} />
    </Routes>
  );
};
