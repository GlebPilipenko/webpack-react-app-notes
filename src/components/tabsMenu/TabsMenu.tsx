import React, { SyntheticEvent, useState } from 'react';

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import { Link } from 'react-router-dom';

import { Path } from 'enums';
import { ReturnComponentType } from 'types';
import { setA11yTabProps } from 'utils';

export const TabsMenu = (): ReturnComponentType => {
  const [tabId, setTabId] = useState(0);

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
            {...setA11yTabProps(0)}
          />
          <Tab label="Записи" to={Path.Notes} component={Link} {...setA11yTabProps(1)} />
        </Tabs>
      </Box>
    </Box>
  );
};
