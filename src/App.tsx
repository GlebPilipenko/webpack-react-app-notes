import React from 'react';

import { createTheme } from '@mui/material';
import { ThemeProvider } from '@mui/styles';
import { BrowserRouter } from 'react-router-dom';

import { TabsMenu } from 'components';
import { Router } from 'routes';
import { ReturnComponentType } from 'types';

const theme = createTheme();

export const App = (): ReturnComponentType => (
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <TabsMenu />
      <Router />
    </ThemeProvider>
  </BrowserRouter>
);
