import {useEffect} from 'react';
//import {useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import {useNavigation} from '@react-navigation/native';

export const useOnboarding = () => {
  const {replace} = useNavigation();

  const ifAppLaunchedFirstTime = async () => {
    let launchedValue = null;
    try {
      const isAppLaunched = await AsyncStorage.getItem('appIsLaunched');
      if (isAppLaunched !== null) {
        replace('Products');
      }
      launchedValue = isAppLaunched;
    } catch (error) {
      console.log('Some error occured!');
    }
    return launchedValue;
  };
  ifAppLaunchedFirstTime();
};
