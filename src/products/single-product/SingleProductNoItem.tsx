import {StyleSheet, View} from 'react-native';
import React from 'react';
import {ECText} from '../../components/ECText';
import {useNavigation} from '@react-navigation/native';

const SingleProductNoItem = () => {
  const {goBack} = useNavigation();
  return (
    <View style={styles.container}>
      <ECText fontSize={40} bold textColor="#000000">
        Something went wrong. Please, try again later
      </ECText>
      <ECText fontSize={20} textColor="#000000" onPress={() => goBack()}>
        Go Back
      </ECText>
    </View>
  );
};

export default SingleProductNoItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
