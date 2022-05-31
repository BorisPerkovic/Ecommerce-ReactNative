import {StyleSheet, View} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {ECText} from '../../components/ECText';

export const FilterNoResults = () => {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons name="filter-off" size={50} color={'black'} />
      <ECText textColor={'black'} fontSize={27} textAlign="center">
        We were unable to find products that match your filter requirements
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
