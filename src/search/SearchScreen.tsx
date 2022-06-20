import {StyleSheet, View} from 'react-native';
import React from 'react';
import {MyStatusBar} from '../components/ECStatusBar';
import SearchInputField from './SearchInputField';
import SearchItems from './SearchItems';
import {useAppTheme} from '../theme';
import {ECHeader} from '../components/Header/ECHeader';

const SearchScreen = () => {
  const {
    colors: {backgroundColor},
  } = useAppTheme();
  return (
    <View style={[styles.container, {backgroundColor}]}>
      <MyStatusBar />
      <ECHeader screenTitle="Search" />
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
