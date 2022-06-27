import {StyleSheet, View} from 'react-native';
import React from 'react';
import {ECText} from '../../components/ECText';
import {useAppTheme} from '../../theme';
import {useTranslation} from 'react-i18next';

export const EditProfilePushNotification = () => {
  const {
    colors: {primaryTextColor},
  } = useAppTheme();
  const {t} = useTranslation('account');
  return (
    <View style={styles.container}>
      <ECText
        fontSize={17}
        textColor={primaryTextColor}
        bold
        style={styles.title}>
        {t('pushNotifications')}
      </ECText>
      <ECText fontSize={15} textColor={primaryTextColor} style={styles.text}>
        {t('pushNotificationsSubtitle')}
      </ECText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
  },
  title: {
    marginBottom: 7,
    lineHeight: 24,
  },
  text: {
    lineHeight: 18,
  },
});
