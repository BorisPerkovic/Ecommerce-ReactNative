import {ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
import {MyStatusBar} from '../../components/ECStatusBar';
import {EditProfileHeader} from './EditProfileHeader';
import {EditProfileAvatar} from './EditProfileAvatar';
import {useSelector} from 'react-redux';
import {RootState} from '../../store';
import {EditProfileItem} from './EditProfiltem';
import {EditProfilePushNotification} from './EditProfilePushNotification';
import {DeleceAccountButton} from './DeleceAccountButton';

export const EditProfileScreen = () => {
  const user = useSelector((state: RootState) => state.signIn.loggedUser);

  return (
    <View style={styles.container}>
      <MyStatusBar themeStyle="light-content" backColor="#004666" />
      <ScrollView contentContainerStyle={styles.wrapper}>
        <EditProfileHeader />
        <EditProfileAvatar name={user.firstName} lastName={user.lastName} />
        <EditProfileItem
          label="Email"
          value={user.email}
          navigateTo="EditEmail"
          icon="ios-pencil-outline"
        />
        <EditProfileItem
          label="Password"
          value={'******************'}
          navigateTo="EditPassword"
          icon="ios-pencil-outline"
        />
        <EditProfileItem
          label="Language"
          value={'English'}
          navigateTo="EditLanguage"
          icon="chevron-forward-outline"
        />
        <EditProfilePushNotification />
        <DeleceAccountButton />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  wrapper: {
    flexGrow: 1,
    paddingHorizontal: 20,
  },
});
