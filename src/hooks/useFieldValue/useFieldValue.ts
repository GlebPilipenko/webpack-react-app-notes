import { ChangeEvent, useCallback, useMemo, useState } from 'react';

import { UseFieldValueReturnType } from './types';

export const useFieldValue = (): UseFieldValueReturnType => {
  const [fieldValue, setFieldValue] = useState('');

  const handleSetFieldValue = useCallback((newValue): void => {
    setFieldValue(newValue);
  }, []);

  const handleTextFieldValueChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>): void => {
      setFieldValue(event.target.value);
    },
    [],
  );

  return useMemo(
    () => [fieldValue, handleTextFieldValueChange, handleSetFieldValue],
    [fieldValue, handleTextFieldValueChange, handleSetFieldValue],
  );
};
