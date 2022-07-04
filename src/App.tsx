import React, {FunctionComponent, useEffect, useState} from 'react';
import {Platform, StyleSheet, UIManager, View} from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import {NavigationContainer} from '@react-navigation/native';
import {enableScreens} from 'react-native-screens';
import {SafeAreaProvider} from 'react-native-safe-area-view';
import {Modal, Provider as PaperProvider} from 'react-native-paper';
import {RootStack} from './RootStack';
import FlashMessage from 'react-native-flash-message';
import {ECFlashMessage} from './components/ECFlashMessage';
import {ThemeContext, useAppTheme} from './theme/theme';
import {useTheme} from './theme/useTheme';
import {ECText} from './components/ECText';
import {useTranslation} from 'react-i18next';
import Feather from 'react-native-vector-icons/Feather';

enableScreens();

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const App = () => {
  const [isConnected, setIsConnected] = useState<boolean | null>(true);
  const {appTheme} = useTheme();

  useEffect(() => {
    const removeNetInfoSubscription = NetInfo.addEventListener(state => {
      const online = state.isConnected && state.isInternetReachable;
      setIsConnected(online);
    });

    return () => removeNetInfoSubscription();
  }, []);

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
        <NoInternetModal isVisible={isConnected} />
      </ThemeContext.Provider>
    </>
  );
};

export default App;

interface NoInternetModalProps {
  isVisible: boolean | null;
}

const NoInternetModal: FunctionComponent<NoInternetModalProps> = ({
  isVisible,
}) => {
  const {
    colors: {backgroundColor, primaryTextColor},
  } = useAppTheme();
  const {t} = useTranslation('account');
  return (
    <Modal visible={!isVisible} style={styles.modal} dismissable={false}>
      <View style={[styles.modalContainer, {backgroundColor: backgroundColor}]}>
        <Feather name="wifi-off" size={28} color={primaryTextColor} />
        <ECText fontSize={22} bold style={styles.modalTitle}>
          {t('connError')}
        </ECText>
        <ECText fontSize={18} textAlign="center" style={styles.modalText}>
          {t('noInternet')}
        </ECText>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  modalContainer: {
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 40,
    alignItems: 'center',
  },
  modalTitle: {
    marginVertical: 10,
  },
  modalText: {
    marginTop: 14,
    marginVertical: 10,
  },
});
