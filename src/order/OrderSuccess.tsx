import {StyleSheet, View} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {ECText} from '../components/ECText';
import {useNavigation} from '@react-navigation/native';
import {useAppTheme} from '../theme';
import {ECButton} from '../components/button/ECButton';
import {useTranslation} from 'react-i18next';

export const OrderSuccess = () => {
  const {
    colors: {backgroundColor},
    buttons: {primaryButtonContained},
  } = useAppTheme();
  const {t} = useTranslation('order');
  const {navigate} = useNavigation();

  return (
    <View style={[styles.container, {backgroundColor}]}>
      <Ionicons name="checkmark" size={60} color={'lime'} />
      <ECText bold fontSize={30} textAlign="center">
        {t('orderSuccess')}
      </ECText>
      <ECText fontSize={25} textAlign="center" style={styles.text}>
        {t('orderSuccesSubtitle')}
      </ECText>
      <ECButton
        mode="outlined"
        variant={primaryButtonContained}
        onPress={() => navigate('Home')}>
        {t('done')}
      </ECButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
  },
  text: {
    marginVertical: 20,
  },
  button: {
    paddingHorizontal: 15,
    paddingVertical: 25,
  },
});
