import React from 'react';

import { Routes, Route } from 'react-router-dom';

import { Path } from 'enums';
import { NoteForm, Notes } from 'pages';
import { ReturnComponentType } from 'types';

export const Router = (): ReturnComponentType => (
  <Routes>
    <Route path={Path.Form} element={<NoteForm />} />
    <Route path={Path.Notes} element={<Notes />} />
  </Routes>
);
