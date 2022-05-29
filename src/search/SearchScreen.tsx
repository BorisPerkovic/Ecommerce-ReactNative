import {StyleSheet, View} from 'react-native';
import React from 'react';
import {MyStatusBar} from '../components/ECStatusBar';
import {SearchHeader} from './SearchHeader';
import SearchInputField from './SearchInputField';
import SearchItems from './SearchItems';

const SearchScreen = () => {
  return (
    <View style={styles.container}>
      <MyStatusBar backColor="#004666" themeStyle="light-content" />
      <SearchHeader />
      <SearchInputField />
      <SearchItems />
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
