import React, { SyntheticEvent, useState } from 'react';

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import { Link, useLocation } from 'react-router-dom';

import { Path, TabId } from 'enums';
import { ReturnComponentType } from 'types';
import { configCurrentTabId, setA11yTabProps } from 'utils';

export const TabsMenu = (): ReturnComponentType => {
  const { pathname } = useLocation();

  const [tabId, setTabId] = useState(configCurrentTabId(pathname));

  const onTabsChange = (event: SyntheticEvent, id: number): void => {
    setTabId(id);
  };

  return (
    <Box sx={{ width: '100%', mb: 2 }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={tabId} onChange={onTabsChange}>
          <Tab
            label="Создать запись"
            to={Path.Form}
            component={Link}
            {...setA11yTabProps(TabId.Form)}
          />
          <Tab
            label="Записи"
            to={Path.Notes}
            component={Link}
            {...setA11yTabProps(TabId.Notes)}
          />
        </Tabs>
      </Box>
    </Box>
  );
};
