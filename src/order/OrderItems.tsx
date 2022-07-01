import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {ECFormLayout} from '../components/ECFormLayout';
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
        return (
          <ECFormLayout>
            <OrderLocation position={position} setPosition={setPosition} />
          </ECFormLayout>
        );
      case 2:
        return <OrderCart />;
    }
  };

  return (
    <View style={styles.container}>
      <OrderStepper position={position} />
      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.containerContent}>
        {Stepper()}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerContent: {
    flexGrow: 1,
  },
});
