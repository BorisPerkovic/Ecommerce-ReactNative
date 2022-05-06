import {StyleSheet, Text, View, Button} from 'react-native';
import React, {FunctionComponent} from 'react';
import {useNavigation} from '@react-navigation/native';

export const OrderSuccess: FunctionComponent<{}> = () => {
  const {navigate} = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Your order has been actepted.</Text>
      <Button
        title="Home"
        onPress={() => {
          navigate('Home');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});
