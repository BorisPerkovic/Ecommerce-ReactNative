/* eslint-disable react-native/no-inline-styles */
import React, {FunctionComponent} from 'react';
import {Alert, StyleSheet, View} from 'react-native';
import {IconButton} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {useAppTheme} from '../../theme';
import {ECText} from '../ECText';

export const SCREEN_HEADER_HEIGHT = 50;

export interface ScreenHeaderProps {
  screenTitle: string;
  preventGoBack?: boolean;
}

export const ECHeader: FunctionComponent<ScreenHeaderProps> = props => {
  const {
    colors: {backgroundColor, primaryTextColor},
  } = useAppTheme();
  const {screenTitle, preventGoBack = false} = props;

  const {goBack, navigate} = useNavigation();

  return (
    <View style={[styles.container, {backgroundColor: backgroundColor}]}>
      <View style={styles.iconContainer}>
        <IconButton
          icon="chevron-left"
          color={primaryTextColor}
          onPress={() => {
            if (preventGoBack) {
              Alert.alert(
                'Discard Changes?',
                'You may have some changes that are not saved. Are you sure you want to go back?',
                [
                  {
                    text: 'Cancel',
                    onPress: () => null,
                    style: 'cancel',
                  },
                  {
                    text: 'YES',
                    style: 'destructive',
                    onPress: () => navigate('Home'),
                  },
                ],
              );
            } else {
              goBack();
            }
          }}
          size={35}
        />
      </View>
      <View style={styles.screenTitle}>
        <ECText
          bold
          textColor={primaryTextColor}
          fontSize={23}
          textAlign="center">
          {screenTitle}
        </ECText>
      </View>
      <View style={{width: '25%'}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 20,
  },
  iconContainer: {
    width: '25%',
    alignItems: 'center',
    justifyContent: 'center',
    height: 45,
  },
  screenTitle: {
    flex: 1,
  },
});
