import {StyleSheet, View} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {ECText} from '../../components/ECText';
import {useAppTheme} from '../../theme';
import {useTranslation} from 'react-i18next';

export const FilterNoResults = () => {
  const {
    colors: {primaryTextColor, backgroundColor},
  } = useAppTheme();
  const {t} = useTranslation('products');
  return (
    <View style={[styles.container, {backgroundColor}]}>
      <MaterialCommunityIcons
        name="filter-off"
        size={50}
        color={primaryTextColor}
      />
      <ECText textColor={primaryTextColor} fontSize={25} textAlign="center">
        {t('noFilterResults')}
      </ECText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
});
