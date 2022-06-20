import React, {FunctionComponent} from 'react';
import {DataProtectionNavigationItem} from './DataProtectionNavigationItem';
import {LanguageSettingsNavigationItem} from './LanguageSettingsNavigationItem';
import {CallSupportNavigationItem} from './CallSupportNavigationItem';
import {Partners} from './Partners';
import {Divider} from '../components/Divider';
import {useAppTheme} from '../theme';

export const GuestAccount: FunctionComponent<{}> = () => {
  const {
    colors: {sideMenuDividerColor},
  } = useAppTheme();
  return (
    <>
      <DataProtectionNavigationItem />
      <Divider color={sideMenuDividerColor} />
      <LanguageSettingsNavigationItem title="Country Settings" />
      <Divider color={sideMenuDividerColor} />
      <Partners />
      <Divider color={sideMenuDividerColor} />
      <CallSupportNavigationItem>Call Support</CallSupportNavigationItem>
      <Divider color={sideMenuDividerColor} />
    </>
  );
};
