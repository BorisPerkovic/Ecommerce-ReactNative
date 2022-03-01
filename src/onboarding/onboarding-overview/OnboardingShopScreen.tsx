import React from 'react';
import {StyleSheet, Dimensions, View, StatusBar} from 'react-native';
import {ECText} from '../../components/ECText';
import {OnboardingOverviewAction} from './OnboardingOverviewAction';
import {OnboardingOverviewItems} from './OnboardingOverviewItems';
import Fontisto from 'react-native-vector-icons/Fontisto';

export const OnboardingShopScreen = () => {
  return (
    <View style={styles.root}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <View style={styles.content}>
        <OnboardingOverviewItems>
          <Fontisto
            style={styles.icon}
            name="shopping-store"
            size={100}
            color="#004666"
          />
          <ECText
            bold
            fontSize={Dimensions.get('window').height < 800 ? 30 : 40}
            textColor="#004666"
            textAlign="center">
            Unique Qaulity Products
          </ECText>
          <ECText
            fontSize={Dimensions.get('window').height < 800 ? 16 : 18}
            textAlign="center"
            style={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Necessitatibus illo animi amet distinctio corporis reiciendis
            blanditiis quisquam voluptatum iure eligendi voluptates cumque quo
            error fuga, laboriosam labore facilis! Eos, autem!
          </ECText>
        </OnboardingOverviewItems>
        <OnboardingOverviewAction
          replaceTo="OnboardingPaymant"
          title="Secure Paymant"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingBottom: 32,
  },
  icon: {
    marginVertical: 20,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    paddingHorizontal: 16,
  },
  description: {
    lineHeight: Dimensions.get('window').height < 800 ? 24 : 28,
    width: '85%',
    alignSelf: 'center',
    marginVertical: 20,
  },
});
