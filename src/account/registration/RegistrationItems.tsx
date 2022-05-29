import React, {useState} from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {RegistrationStepper} from './RegistrationStepper';
import {RegistrationUserInfo} from './RegistrationUserInfo';
import {RegistrationUserPassword} from './RegistrationUserPassword';
import {RegisterUserSuccess} from './RegistrationUserSucces';

export const RegistrationItems = () => {
  const [position, setPosition] = useState<number>(0);

  const Stepper = () => {
    switch (position) {
      case 0:
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
            <RegistrationUserInfo
              position={position}
              setPosition={setPosition}
            />
          </KeyboardAwareScrollView>
        );
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
            <RegistrationUserPassword
              position={position}
              setPosition={setPosition}
            />
          </KeyboardAwareScrollView>
        );
      case 2:
        return <RegisterUserSuccess setPosition={setPosition} />;
    }
  };

  return (
    <View style={styles.container}>
      <RegistrationStepper position={position} />
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
