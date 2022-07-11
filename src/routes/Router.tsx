import React, { useEffect } from 'react';

import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';

import { Path } from 'enums';
import { NoteForm, Notes } from 'pages';
import { ReturnComponentType } from 'types';

export const Router = (): ReturnComponentType => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === Path.Main) {
      navigate(Path.Form);
    }
  }, [navigate, location.pathname]);

  return (
    <Routes>
      <Route path={Path.Form} element={<NoteForm />} />
      <Route path={Path.Notes} element={<Notes />} />
    </Routes>
  );
};
