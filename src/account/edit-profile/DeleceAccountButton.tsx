import {Alert, StyleSheet, View} from 'react-native';
import React, {useEffect} from 'react';
import {ECButton} from '../../components/button/ECButton';
import {useAppTheme} from '../../theme';
import {useDispatch, useSelector} from 'react-redux';
import {deleteAccountThunk} from './deleteAccountSlice';
import {RootState} from '../../store';
import {logout} from '../sign-in/signInSlice';
import {useNavigation} from '@react-navigation/native';

export const DeleceAccountButton = () => {
  const {
    buttons: {deleteAccountButton},
  } = useAppTheme();
  const dispatch = useDispatch();
  const {navigate} = useNavigation();
  const user = useSelector((state: RootState) => state.signIn.loggedUser);
  const isLoading = useSelector(
    (state: RootState) => state.deleteAccount.loading,
  );

  useEffect(() => {
    if (isLoading === 'succeeded') {
      dispatch(logout());
      navigate('Home');
    }
  }, [dispatch, isLoading, navigate]);

  return (
    <View style={styles.button}>
      <ECButton
        mode="outlined"
        variant={deleteAccountButton}
        loading={isLoading === 'pending'}
        onPress={async () => {
          Alert.alert(
            'Delete Account?',
            'This action is permament. Are you sure you want to delete your account?',
            [
              {
                text: 'Cancel',
                onPress: () => null,
                style: 'cancel',
              },
              {
                text: 'YES',
                style: 'destructive',
                onPress: () => {
                  dispatch(deleteAccountThunk({id: user.id}));
                },
              },
            ],
          );
        }}>
        Delete Account
      </ECButton>
    </View>
  );
};
const styles = StyleSheet.create({
  button: {
    paddingVertical: 10,
  },
});
