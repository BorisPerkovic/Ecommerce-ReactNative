/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, View} from 'react-native';
import React, {FunctionComponent} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {ECText} from '../../components/ECText';
import {ECButton} from '../../components/button/ECButton';
import {useAppTheme} from '../../theme';

interface RegisterUserSuccesProps {
  setPosition: (num: number) => void;
}

export const RegisterUserSuccess: FunctionComponent<
  RegisterUserSuccesProps
> = ({setPosition}) => {
  const {
    colors: {backgroundColor, primaryTextColor},
    buttons: {primaryButtonContained},
  } = useAppTheme();
  const {navigate} = useNavigation();

  return (
    <View style={[styles.container, {backgroundColor}]}>
      <View style={styles.contentWrapper}>
        <Ionicons name="checkmark" size={60} color={'lime'} />
        <ECText
          textColor={primaryTextColor}
          bold
          fontSize={30}
          textAlign="center">
          Your account has been successfully created.
        </ECText>
        <ECText
          textColor={primaryTextColor}
          fontSize={25}
          textAlign="center"
          style={{marginTop: 20}}>
          Now, you can log in with your account and proceed to shoping.
        </ECText>
      </View>
      <View style={styles.button}>
        <ECButton
          mode="outlined"
          variant={primaryButtonContained}
          onPress={() => {
            navigate('Home');
            setPosition(0);
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
    backgroundColor: 'white',
    paddingBottom: 25,
  },
  contentWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    padding: 15,
  },
});
