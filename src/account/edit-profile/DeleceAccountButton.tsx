import {StyleSheet, View} from 'react-native';
import React from 'react';
import {ECButton} from '../../components/button/ECButton';
import {useAppTheme} from '../../theme';

export const DeleceAccountButton = () => {
  const {
    buttons: {deleteAccountButton},
  } = useAppTheme();
  return (
    <View style={styles.button}>
      <ECButton
        mode="outlined"
        variant={deleteAccountButton}
        onPress={() => {
          console.log('button clciked');
        }}>
        Delete Account
      </ECButton>
    </View>
  );
};
const styles = StyleSheet.create({
  button: {
    paddingVertical: 10,
  },
});
