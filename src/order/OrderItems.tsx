import React, {useState} from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
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
            enableOnAndroid
            showsVerticalScrollIndicator={false}
            bounces={false}
            extraHeight={Platform.OS === 'ios' ? 85 : 0}
            extraScrollHeight={32}
            keyboardOpeningTime={0}
            keyboardShouldPersistTaps="handled"
            contentContainerStyle={styles.containerContent}>
            <OrderLocation position={position} setPosition={setPosition} />
          </KeyboardAwareScrollView>
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
