import {StyleSheet, View} from 'react-native';
import React from 'react';
import {useAppTheme} from '../theme';
import {ECText} from '../components/ECText';
import {useSelector} from 'react-redux';
import {RootState} from '../store';
import {useTranslation} from 'react-i18next';

export const FeedbackTitle = () => {
  const {
    colors: {primaryTextColor},
  } = useAppTheme();
  const {t} = useTranslation('account');
  const user = useSelector((state: RootState) => state.signIn.loggedUser);
  return (
    <View style={styles.container}>
      <ECText
        fontSize={26}
        textAlign="center"
        textColor={primaryTextColor}
        bold>
        {t('hey')} {user.firstName} {user.lastName}!
      </ECText>
      <ECText
        fontSize={15}
        textAlign="center"
        textColor={primaryTextColor}
        style={styles.email}>
        {user.email}
      </ECText>
      <ECText
        fontSize={15}
        textAlign="center"
        textColor={primaryTextColor}
        style={styles.text}>
        {t('appFeedbackSubtitle')}
      </ECText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  email: {
    opacity: 0.7,
  },
  text: {
    marginVertical: 16,
  },
});
