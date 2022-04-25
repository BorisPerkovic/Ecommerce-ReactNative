import AsyncStorage from '@react-native-async-storage/async-storage';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {User, users} from '../../../util/fakeusers';
import {alertService} from '../../alertService';

interface SignInUser {
  users: User[];
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
  errorMessage?: number;
  isLoggedIn: boolean;
  loggedUser: User;
}

const initialState: SignInUser = {
  users: users,
  loading: 'idle',
  errorMessage: 0,
  isLoggedIn: false,
  loggedUser: {
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  },
};

interface Credentials {
  email: string;
  password: string;
}

export const signInSlice = createSlice({
  name: 'signIn',
  initialState,
  reducers: {
    login(state, action: PayloadAction<Credentials>) {
      state.loading = 'pending';
      const checkUsers = state.users.filter(
        user =>
          user.email === action.payload.email &&
          user.password === action.payload.password,
      );
      if (checkUsers.length > 0) {
        state.loggedUser = {
          id: checkUsers[0].id,
          firstName: checkUsers[0].firstName,
          lastName: checkUsers[0].lastName,
          email: checkUsers[0].email,
          password: checkUsers[0].password,
        };
        state.errorMessage = 200;
      } else {
        state.errorMessage = 401;
      }
    },
    setErrors(state) {
      if (state.errorMessage === 200) {
        state.isLoggedIn = true;
        state.loading = 'succeeded';
        const setStorage = async () => {
          await AsyncStorage.setItem(
            'signIn',
            JSON.stringify({
              isLoggedIn: state.isLoggedIn,
              loggedUser: state.loggedUser,
            }),
          );
        };
        setStorage();
      } else {
        state.loading = 'failed';
        alertService.alert(
          'warning',
          "We couldn't log you in\nCheck your email or password and try again",
        );
      }
    },
    logout(state) {
      state.loading = 'idle';
      state.errorMessage = 0;
      state.isLoggedIn = false;
      state.loggedUser = {
        id: '',
        firstName: '',
        lastName: '',
        email: '',
        password: '',
      };
      const setStorage = async () => {
        await AsyncStorage.removeItem('signIn');
      };
      setStorage();
    },
  },
});

export const {login, setErrors, logout} = signInSlice.actions;

export default signInSlice.reducer;
