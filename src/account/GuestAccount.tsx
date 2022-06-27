import React, {FunctionComponent} from 'react';
import {DataProtectionNavigationItem} from './DataProtectionNavigationItem';
import {LanguageSettingsNavigationItem} from './LanguageSettingsNavigationItem';
import {CallSupportNavigationItem} from './CallSupportNavigationItem';
import {Partners} from './Partners';
import {Divider} from '../components/Divider';
import {useAppTheme} from '../theme';
import {RootState} from '../store';
import {useSelector} from 'react-redux';
import {useTranslation} from 'react-i18next';

export const GuestAccount: FunctionComponent<{}> = () => {
  const {
    colors: {sideMenuDividerColor},
  } = useAppTheme();
  const {t} = useTranslation('account');
  const isLoggedIn = useSelector((state: RootState) => state.signIn.isLoggedIn);
  return (
    <>
      <DataProtectionNavigationItem />
      <Divider color={sideMenuDividerColor} />
      {!isLoggedIn ? (
        <>
          <LanguageSettingsNavigationItem title={t('countrySettings')} />
          <Divider color={sideMenuDividerColor} />
        </>
      ) : null}
      <Partners />
      <Divider color={sideMenuDividerColor} />
      <CallSupportNavigationItem>{t('callSupport')}</CallSupportNavigationItem>
      <Divider color={sideMenuDividerColor} />
    </>
  );
};
