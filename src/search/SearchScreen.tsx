import {StyleSheet, View} from 'react-native';
import React from 'react';
import {MyStatusBar} from '../components/ECStatusBar';
import SearchInputField from './SearchInputField';
import SearchItems from './SearchItems';
import {useAppTheme} from '../theme';
import {ECHeader} from '../components/Header/ECHeader';
import {useTranslation} from 'react-i18next';

const SearchScreen = () => {
  const {
    colors: {backgroundColor},
  } = useAppTheme();
  const {t} = useTranslation('products');
  return (
    <View style={[styles.container, {backgroundColor}]}>
      <MyStatusBar />
      <ECHeader screenTitle={t('search')} />
      <SearchInputField />
      <SearchItems />
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
