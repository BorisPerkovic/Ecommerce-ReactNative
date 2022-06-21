import {StyleSheet, View} from 'react-native';
import React from 'react';
import {useAppTheme} from '../theme';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {ECText} from '../components/ECText';
import {ECButton} from '../components/button/ECButton';
import {useDispatch} from 'react-redux';
import {resetfeedbackState} from './appFeedbackSlice';

export const FeedbackSucces = () => {
  const {
    colors: {backgroundColor},
    buttons: {primaryButtonContained},
  } = useAppTheme();
  const {goBack} = useNavigation();
  const dispatch = useDispatch();

  return (
    <View style={[styles.container, {backgroundColor}]}>
      <Ionicons name="checkmark" size={60} color={'lime'} />
      <ECText bold fontSize={30} textAlign="center">
        Your feedback has been successfully accepted.
      </ECText>
      <ECText fontSize={25} textAlign="center" style={styles.text}>
        Thank you for using our shop and services.
      </ECText>
      <ECButton
        mode="outlined"
        variant={primaryButtonContained}
        onPress={() => {
          dispatch(resetfeedbackState());
          goBack();
        }}>
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
