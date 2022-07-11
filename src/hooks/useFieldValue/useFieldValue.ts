import { ChangeEvent, useState } from 'react';

import { UseFieldValueReturnType } from './types';

export const useFieldValue = (initialValue: string): UseFieldValueReturnType => {
  const [fieldValue, setFieldValue] = useState(initialValue);

  const handleTextFieldValueChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setFieldValue(event.target.value);
  };

  return [fieldValue, handleTextFieldValueChange];
};
