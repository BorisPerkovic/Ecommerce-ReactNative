import {Pressable, StyleSheet} from 'react-native';
import React from 'react';
import {ECOMMERCE_THEME} from '../../theme/ecommerce/ecommerceTheme';
import {ECText} from '../ECText';
import {useNavigation} from '@react-navigation/native';

const {searchBorderColor} = ECOMMERCE_THEME.colors;

export const HeaderSearch = () => {
  const {navigate} = useNavigation();
  return (
    <Pressable
      style={styles.container}
      onPress={() => {
        navigate('Search');
      }}>
      <ECText textColor="#004666" fontSize={15}>
        Search...
      </ECText>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '70%',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: searchBorderColor,
    padding: 10,
    marginHorizontal: 10,
  },
});
