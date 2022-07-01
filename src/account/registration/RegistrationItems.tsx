import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {ECFormLayout} from '../../components/ECFormLayout';
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
          <ECFormLayout>
            <RegistrationUserInfo
              position={position}
              setPosition={setPosition}
            />
          </ECFormLayout>
        );
      case 1:
        return (
          <ECFormLayout>
            <RegistrationUserPassword
              position={position}
              setPosition={setPosition}
            />
          </ECFormLayout>
        );
      case 2:
        return <RegisterUserSuccess setPosition={setPosition} />;
    }
  };

  return (
    <View style={styles.container}>
      <RegistrationStepper position={position} />
      <ScrollView
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
    paddingHorizontal: 5,
  },
});
