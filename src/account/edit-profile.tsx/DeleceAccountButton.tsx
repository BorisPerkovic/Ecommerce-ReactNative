import {StyleSheet, View} from 'react-native';
import React from 'react';
import {ECButton} from '../../components/button/ECButton';
import {ecommerceButtonTheme} from '../../theme/ecommerce/ecommerceButtonTheme';

const {deleteAccountButton} = ecommerceButtonTheme;

export const DeleceAccountButton = () => {
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
