import React, {FunctionComponent} from 'react';
import {StyleSheet} from 'react-native';
import {ECText} from '../components/ECText';

interface GuestGreetingProps {}

export const GuestGreeting: FunctionComponent<GuestGreetingProps> = () => {
  return (
    <>
      <ECText fontSize={24} bold textColor="#ffffff" style={styles.title}>
        Hi There!
      </ECText>
      <ECText fontSize={15} textColor="#ffffff" style={styles.subTitle}>
        Sign in to start your shopping travel.
      </ECText>
    </>
  );
};

const styles = StyleSheet.create({
  title: {lineHeight: 27},
  subTitle: {lineHeight: 24},
});
