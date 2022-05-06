import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {OrderCart} from './OrderCart';
import {OrderLocation} from './OrderLocation';
import {OrderStepper} from './OrderStepper';
import {OrderUserInfo} from './OrderUserInfo';

export const OrderItems = () => {
  const [position, setPosition] = useState<number>(0);

  const Stepper = () => {
    switch (position) {
      case 0:
        return <OrderUserInfo position={position} setPosition={setPosition} />;
      case 1:
        return <OrderLocation position={position} setPosition={setPosition} />;
      case 2:
        return <OrderCart position={position} setPosition={setPosition} />;
    }
  };

  return (
    <View style={styles.container}>
      <OrderStepper position={position} />
      <View style={styles.containerContent}>{Stepper()}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerContent: {
    flex: 1,
    padding: 20,
  },
});
