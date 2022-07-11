import { ReactNode } from 'react';

export type PropsType = {
  type: 'button' | 'submit' | 'reset';
  isDisabled?: boolean;
  children: ReactNode;
};
