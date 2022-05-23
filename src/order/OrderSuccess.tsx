/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, View} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {ECText} from '../components/ECText';
import {ECOMMERCE_THEME} from '../theme/ecommerce/ecommerceTheme';
import {TouchableRipple} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import Entypo from 'react-native-vector-icons/Entypo';
import {MyStatusBar} from '../components/ECStatusBar';

const {black, headerIconColor, iconRippleColor, white} = ECOMMERCE_THEME.colors;

export const OrderSuccess = () => {
  const {navigate} = useNavigation();

  return (
    <>
      <MyStatusBar backColor="#004666" themeStyle="light-content" />
      <View style={{flex: 1, backgroundColor: white}}>
        <View style={styles.headerContainer}>
          <View style={{width: '25%'}}>
            <View>
              <TouchableRipple
                borderless
                style={styles.backIcon}
                rippleColor={iconRippleColor}
                accessibilityRole="button"
                onPress={() => navigate('Home')}>
                <Entypo name="chevron-left" size={30} color={headerIconColor} />
              </TouchableRipple>
            </View>
          </View>
          <View style={{width: '50%'}}>
            <ECText textAlign="center" textColor={black} bold fontSize={25}>
              Order
            </ECText>
          </View>
          <View style={{width: '25%'}}></View>
        </View>
        <View style={styles.container}>
          <Ionicons name="checkmark" size={60} color={'lime'} />
          <ECText textColor={black} bold fontSize={30} textAlign="center">
            Your order has been successfully accepted.
          </ECText>
          <ECText
            textColor={black}
            fontSize={25}
            textAlign="center"
            style={{marginTop: 20}}>
            Thank you for using our shop and services.
          </ECText>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
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
  text: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '600',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: white,
  },
});
