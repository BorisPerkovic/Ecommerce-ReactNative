import React from 'react';
import {Platform, UIManager} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {enableScreens} from 'react-native-screens';
import {SafeAreaProvider} from 'react-native-safe-area-view';
import {Provider as PaperProvider} from 'react-native-paper';
import {RootStack} from './RootStack';
import FlashMessage from 'react-native-flash-message';
import {ECFlashMessage} from './components/ECFlashMessage';
import {ThemeContext} from './theme/theme';
import {useTheme} from './theme/useTheme';

enableScreens();

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const App = () => {
  const {appTheme} = useTheme();

  return (
    <>
      <ThemeContext.Provider value={appTheme}>
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
      </ThemeContext.Provider>
    </>
  );
};

export default App;
