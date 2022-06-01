import {useNavigation} from '@react-navigation/native';
import React, {FunctionComponent} from 'react';
import {StyleSheet, View} from 'react-native';
import {IconButton} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useSelector} from 'react-redux';
import {ECText} from '../components/ECText';
import {RootState} from '../store';
import {ECOMMERCE_THEME} from '../theme/ecommerce/ecommerceTheme';

const {sideMenuTextColor} = ECOMMERCE_THEME.colors;

export const UserGreeting: FunctionComponent<{}> = () => {
  const user = useSelector((state: RootState) => state.signIn.loggedUser);
  const {navigate} = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.accountDetails}>
        <ECText
          numberOfLines={1}
          fontSize={24}
          bold
          textColor={sideMenuTextColor}
          style={styles.title}>
          {user.firstName}
        </ECText>
        <ECText
          numberOfLines={1}
          fontSize={24}
          bold
          textColor={sideMenuTextColor}
          style={styles.title}>
          {user.lastName}
        </ECText>
      </View>
      <View>
        <IconButton
          icon={() => (
            <Ionicons name="ios-settings-outline" size={25} color="white" />
          )}
          rippleColor="rgba(0, 17, 26, 0.6)"
          onPress={() => navigate('EditProfile')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  accountDetails: {
    flexBasis: '75%',
  },
  title: {
    lineHeight: 32,
  },
});
