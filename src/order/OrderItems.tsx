import React, {useState} from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
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
          <KeyboardAwareScrollView
            showsVerticalScrollIndicator={false}
            bounces={false}
            extraHeight={Platform.OS === 'ios' ? 85 : 0}
            extraScrollHeight={600 ? 16 : 32}
            keyboardOpeningTime={0}
            keyboardShouldPersistTaps="always"
            contentContainerStyle={styles.containerContent}>
            <OrderLocation position={position} setPosition={setPosition} />
          </KeyboardAwareScrollView>
        );
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
    flexGrow: 1,
    paddingHorizontal: 10,
  },
  containerContent: {
    flexGrow: 1,
  },
});
