/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, View} from 'react-native';
import React from 'react';
import {TouchableRipple} from 'react-native-paper';
import Entypo from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';
import {ECText} from '../../components/ECText';
import {ECOMMERCE_THEME} from '../../theme/ecommerce/ecommerceTheme';

const {black, headerIconColor, iconRippleColor, white} = ECOMMERCE_THEME.colors;

export const EditProfileHeader = () => {
  const {goBack} = useNavigation();
  return (
    <View style={styles.headerContainer}>
      <View style={{width: '20%'}}>
        <View>
          <TouchableRipple
            borderless
            style={styles.backIcon}
            rippleColor={iconRippleColor}
            accessibilityRole="button"
            onPress={() => goBack()}>
            <Entypo name="chevron-left" size={30} color={headerIconColor} />
          </TouchableRipple>
        </View>
      </View>
      <View style={{width: '50%'}}>
        <ECText textAlign="center" textColor={black} bold fontSize={25}>
          Edit Profile
        </ECText>
      </View>
      <View style={{width: '25%'}}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: white,
  },
  backIcon: {
    padding: 5,
    width: 40,
    height: 40,
    borderRadius: 50,
  },
});
