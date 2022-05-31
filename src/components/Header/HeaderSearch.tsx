import {StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {ECText} from '../ECText';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export const HeaderSearch = () => {
  const {navigate} = useNavigation();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        navigate('Search');
      }}>
      <ECText textColor="#004666" fontSize={15}>
        Search...
      </ECText>
      <Ionicons name="search-outline" size={20} color="#004666" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: '#004666',
    padding: 10,
  },
});
