/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, View} from 'react-native';
import React from 'react';
import {IconButton} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {ECText} from '../components/ECText';
import {FiltersResetButton} from './FiltersResetButton';
import {useAppTheme} from '../theme';
import {useTranslation} from 'react-i18next';

export const FiltersHeader = () => {
  const {
    colors: {primaryTextColor},
  } = useAppTheme();
  const {t} = useTranslation('products');
  const {goBack} = useNavigation();
  return (
    <View style={styles.headerContainer}>
      <View style={{width: '20%'}}>
        <View>
          <IconButton
            icon="chevron-left"
            color={primaryTextColor}
            onPress={() => goBack()}
            size={35}
          />
        </View>
      </View>
      <View style={{width: '50%'}}>
        <ECText bold fontSize={25}>
          {t('filters')}
        </ECText>
      </View>
      <View style={{width: '30%'}}>
        <FiltersResetButton />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  backIcon: {
    padding: 5,
    width: 40,
    height: 40,
    borderRadius: 50,
  },
});
