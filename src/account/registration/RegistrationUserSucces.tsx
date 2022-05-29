/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, View} from 'react-native';
import React, {FunctionComponent} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {ECText} from '../../components/ECText';
import {ECButton} from '../../components/button/ECButton';
import {ecommerceButtonTheme} from '../../theme/ecommerce/ecommerceButtonTheme';

interface RegisterUserSuccesProps {
  setPosition: (num: number) => void;
}

const {primaryButtonContained} = ecommerceButtonTheme;

export const RegisterUserSuccess: FunctionComponent<
  RegisterUserSuccesProps
> = ({setPosition}) => {
  const {navigate} = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.contentWrapper}>
        <Ionicons name="checkmark" size={60} color={'lime'} />
        <ECText textColor={'black'} bold fontSize={30} textAlign="center">
          Your account has been successfully created.
        </ECText>
        <ECText
          textColor={'black'}
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
    paddingVertical: 15,
  },
});
