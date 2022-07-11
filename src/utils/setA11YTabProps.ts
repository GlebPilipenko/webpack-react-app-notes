import { A11YTabPropsType } from 'components/tabsMenu/types';

export const setA11yTabProps = (index: number): A11YTabPropsType => ({
  id: `tab-${index}`,
  'aria-controls': `tabPanel-${index}`,
});
