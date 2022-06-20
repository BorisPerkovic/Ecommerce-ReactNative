import {StyleSheet, View} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {ECText} from '../components/ECText';
import {useNavigation} from '@react-navigation/native';
import {useAppTheme} from '../theme';
import {ECButton} from '../components/button/ECButton';

export const OrderSuccess = () => {
  const {
    colors: {backgroundColor},
    buttons: {primaryButtonContained},
  } = useAppTheme();
  const {navigate} = useNavigation();

  return (
    <View style={[styles.container, {backgroundColor}]}>
      <Ionicons name="checkmark" size={60} color={'lime'} />
      <ECText bold fontSize={30} textAlign="center">
        Your order has been successfully accepted.
      </ECText>
      <ECText fontSize={25} textAlign="center" style={styles.text}>
        Thank you for using our shop and services.
      </ECText>
      <ECButton
        mode="outlined"
        variant={primaryButtonContained}
        onPress={() => navigate('Home')}>
        Done
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
