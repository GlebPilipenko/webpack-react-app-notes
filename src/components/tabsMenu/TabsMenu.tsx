import React from 'react';

import { Link } from 'react-router-dom';

import { Path } from 'enums';
import { ReturnComponentType } from 'types';

export const TabsMenu = (): ReturnComponentType => {
  return (
    <div>
      <button type="button">
        <Link to={Path.Form}>Form</Link>
      </button>
      <button type="button">
        <Link to={Path.Notes}>Notes</Link>
      </button>
    </div>
  );
};
