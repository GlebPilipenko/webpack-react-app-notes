import React from 'react';

import { BrowserRouter } from 'react-router-dom';

import { TabsMenu } from 'components';
import { Router } from 'routes';
import { ReturnComponentType } from 'types';

export const App = (): ReturnComponentType => (
  <BrowserRouter>
    <TabsMenu />
    <Router />
  </BrowserRouter>
);
