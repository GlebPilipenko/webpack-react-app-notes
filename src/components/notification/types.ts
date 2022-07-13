import { ReactNode } from 'react';

import { NotificationColor } from 'enums';

export type PropsType = {
  children: ReactNode;
  severity:
    | NotificationColor.Success
    | NotificationColor.Info
    | NotificationColor.Warning
    | NotificationColor.Error;
  onClose?: (isOpen: boolean) => void;
};
