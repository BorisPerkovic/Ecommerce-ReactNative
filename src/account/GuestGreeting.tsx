import React, {FunctionComponent} from 'react';
import {useTranslation} from 'react-i18next';
import {StyleSheet} from 'react-native';
import {ECText} from '../components/ECText';
import {useAppTheme} from '../theme';

interface GuestGreetingProps {}

export const GuestGreeting: FunctionComponent<GuestGreetingProps> = () => {
  const {
    colors: {sideMenuTextColor},
  } = useAppTheme();
  const {t} = useTranslation('account');
  return (
    <>
      <ECText
        fontSize={24}
        bold
        textColor={sideMenuTextColor}
        style={styles.title}>
        {t('hiThere')}
      </ECText>
      <ECText
        fontSize={15}
        textColor={sideMenuTextColor}
        style={styles.subTitle}>
        {t('hiThereSubtitle')}
      </ECText>
    </>
  );
};

const styles = StyleSheet.create({
  title: {lineHeight: 27},
  subTitle: {lineHeight: 24},
});
