import React from 'react';

import { BrowserRouter } from 'react-router-dom';

import { TabsMenu } from 'components/index';
import { Router } from 'routes/index';
import { ReturnComponentType } from 'types';

export const App = (): ReturnComponentType => (
  <BrowserRouter>
    <TabsMenu />
    <Router />
  </BrowserRouter>
);
