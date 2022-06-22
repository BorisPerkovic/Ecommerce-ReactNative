import {StyleSheet, View} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {ECText} from '../../components/ECText';
import {useAppTheme} from '../../theme';

export const FilterNoResults = () => {
  const {
    colors: {primaryTextColor, backgroundColor},
  } = useAppTheme();
  return (
    <View style={[styles.container, {backgroundColor}]}>
      <MaterialCommunityIcons
        name="filter-off"
        size={50}
        color={primaryTextColor}
      />
      <ECText textColor={primaryTextColor} fontSize={25} textAlign="center">
        We were unable to find products that match your filters requirements
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
