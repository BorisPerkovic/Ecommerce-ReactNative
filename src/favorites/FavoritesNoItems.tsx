import {StyleSheet, View} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {ECText} from '../components/ECText';
import {useAppTheme} from '../theme';

export const FavoritesNoItems = () => {
  const {
    colors: {backgroundColor, primaryTextColor},
  } = useAppTheme();
  return (
    <View style={[styles.container, {backgroundColor: backgroundColor}]}>
      <Ionicons name="heart-dislike" size={50} color={primaryTextColor} />
      <ECText textColor={primaryTextColor} fontSize={25} textAlign="center">
        You have no favorite items.
      </ECText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
