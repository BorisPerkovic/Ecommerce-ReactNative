import {ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
import {RegistrationItems} from './RegistrationItems';
import {ECHeader} from '../../components/Header/ECHeader';
import {MyStatusBar} from '../../components/ECStatusBar';
import {useAppTheme} from '../../theme';

const RegistrationScreen = () => {
  const {
    colors: {backgroundColor},
  } = useAppTheme();
  return (
    <View style={[styles.container, {backgroundColor}]}>
      <MyStatusBar />
      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.container}>
        <ECHeader screenTitle="Registration" preventGoBack={true} />
        <RegistrationItems />
      </ScrollView>
    </View>
  );
};

export default RegistrationScreen;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
});
