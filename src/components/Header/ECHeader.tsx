/* eslint-disable react-native/no-inline-styles */
import React, {FunctionComponent} from 'react';
import {StyleSheet, View} from 'react-native';
import {IconButton} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {useAppTheme} from '../../theme';
import {ECText} from '../ECText';
import {usePreventGoBack} from './usePreventGoBack';

export const SCREEN_HEADER_HEIGHT = 50;

export interface ScreenHeaderProps {
  screenTitle: string;
  preventGoBack?: boolean;
  goBackIcon?: boolean;
}

export const ECHeader: FunctionComponent<ScreenHeaderProps> = props => {
  const {
    colors: {backgroundColor, primaryTextColor},
  } = useAppTheme();
  const {screenTitle, preventGoBack, goBackIcon = true} = props;

  const {goBack} = useNavigation();

  usePreventGoBack(preventGoBack);

  return (
    <View style={[styles.container, {backgroundColor: backgroundColor}]}>
      <View style={styles.iconContainer}>
        {goBackIcon ? (
          <IconButton
            icon="chevron-left"
            color={primaryTextColor}
            onPress={() => goBack()}
            size={35}
          />
        ) : null}
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
