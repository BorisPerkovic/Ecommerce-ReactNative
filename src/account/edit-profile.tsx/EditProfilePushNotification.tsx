import {StyleSheet, View} from 'react-native';
import React from 'react';
import {ECText} from '../../components/ECText';

export const EditProfilePushNotification = () => {
  return (
    <View style={styles.container}>
      <ECText fontSize={17} textColor="#00111A" style={styles.title}>
        Push Notifications
      </ECText>
      <ECText fontSize={15} textColor="#A3A8AE" style={styles.text}>
        We will keep you up to date in case of
      </ECText>
      <ECText fontSize={15} textColor="#A3A8AE" style={styles.text}>
        technical issues or new functionalities.
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
