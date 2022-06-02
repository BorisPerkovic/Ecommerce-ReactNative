import {StyleSheet, View} from 'react-native';
import React from 'react';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import {IconButton} from 'react-native-paper';
import {useSelector} from 'react-redux';
import {RootState} from '../../../store';

export const HeaderIconsMenu = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.menuBtn}>
      <IconButton
        icon="menu"
        rippleColor="rgba(0, 17, 26, 0.6)"
        size={25}
        color={'#004666'}
        onPress={() => navigation.dispatch(DrawerActions.openDrawer)}
      />
    </View>
  );
};

export const HeaderIconsFilter = () => {
  const navigation = useNavigation();
  const filters = useSelector((state: RootState) => state.filter);

  const isFilterEmpty =
    filters.startPrice !== 0 ||
    filters.endPrice !== 2500 ||
    filters.brand.length > 0 ||
    filters.ram.length > 0 ||
    filters.internal.length > 0 ||
    filters.system.length > 0;

  return (
    <View style={styles.filterButton}>
      <IconButton
        rippleColor="rgba(0, 17, 26, 0.6)"
        icon={isFilterEmpty ? 'filter-check-outline' : 'filter-outline'}
        size={25}
        color={'#004666'}
        onPress={() => {
          navigation.navigate('Filters');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  menuBtn: {
    borderRightWidth: 1,
    borderRightColor: '#004666',
    justifyContent: 'center',
  },
  filterButton: {
    borderLeftWidth: 1,
    borderLeftColor: '#004666',
    justifyContent: 'center',
  },
});
