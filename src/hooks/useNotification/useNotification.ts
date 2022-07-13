import { useEffect, useState } from 'react';

import { UseNotificationReturnType } from './types';

const DELAY = 3000;

export const useNotification = (): UseNotificationReturnType => {
  const [isNotificationShowed, setIsNotificationShowed] = useState(false);

  const handleSetIsNotificationShowed = (newValue: boolean): void => {
    setIsNotificationShowed(newValue);
  };

  useEffect(() => {
    const id = setTimeout(() => {
      setIsNotificationShowed(false);
    }, DELAY);

    return () => {
      if (!isNotificationShowed) {
        return clearTimeout(id);
      }
    };
  }, [isNotificationShowed]);

  return [isNotificationShowed, handleSetIsNotificationShowed];
};
