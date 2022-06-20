/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {ECText} from '../../../components/ECText';
import {ECButton} from '../../../components/button/ECButton';
import {useDispatch} from 'react-redux';
import {logout} from '../../sign-in/signInSlice';
import {resetChangeEmailFLow} from './changeEmailSlice';
import {useAppTheme} from '../../../theme';

export const ChangeEmailSuccess = () => {
  const {
    colors: {backgroundColor, primaryTextColor},
    buttons: {primaryButtonContained},
  } = useAppTheme();
  const {navigate} = useNavigation();
  const dispatch = useDispatch();

  return (
    <View style={[styles.container, {backgroundColor}]}>
      <View style={styles.contentWrapper}>
        <Ionicons name="checkmark" size={60} color={'lime'} />
        <ECText
          textColor={primaryTextColor}
          bold
          fontSize={30}
          textAlign="center">
          Your e-mail has been successfully changed.
        </ECText>
        <ECText
          textColor={primaryTextColor}
          fontSize={25}
          textAlign="center"
          style={{marginTop: 20}}>
          Now, you need to log in with your new e-mail to proceed shoping.
        </ECText>
      </View>
      <View style={styles.button}>
        <ECButton
          mode="outlined"
          variant={primaryButtonContained}
          onPress={() => {
            dispatch(resetChangeEmailFLow());
            dispatch(logout());
            navigate('Home');
          }}>
          OK
        </ECButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 20,
    paddingBottom: 25,
  },
  contentWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    paddingVertical: 15,
  },
});
