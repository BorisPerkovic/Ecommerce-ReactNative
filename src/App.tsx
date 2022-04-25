import React from 'react';
import {Platform, UIManager} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {enableScreens} from 'react-native-screens';
import {SafeAreaProvider} from 'react-native-safe-area-view';
import {Provider as PaperProvider} from 'react-native-paper';
import {RootStack} from './RootStack';
import FlashMessage from 'react-native-flash-message';
import {ECFlashMessage} from './components/ECFlashMessage';
import {MyStatusBar} from './components/ECStatusBar';
import {ECOMMERCE_THEME} from './theme/ecommerce/ecommerceTheme';

enableScreens();

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const App = () => {
  return (
    <SafeAreaProvider>
      <PaperProvider>
        <NavigationContainer>
          <RootStack />
        </NavigationContainer>
        <FlashMessage
          position={'top'}
          MessageComponent={props => <ECFlashMessage {...props} />}
        />
      </PaperProvider>
    </SafeAreaProvider>
  );
};

export default App;
