import AsyncStorage from '@react-native-async-storage/async-storage';
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {User} from '../../../util/fakeusers';
import {alertService} from '../../alertService';
import config from '../../../config';

interface SignInUser {
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
  errorMessage?: string;
  isLoggedIn: boolean;
  loggedUser: User;
}

const initialState: SignInUser = {
  loading: 'idle',
  isLoggedIn: false,
  loggedUser: {
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  },
};

export const signInThunk = createAsyncThunk(
  'signIn/signInthunk',
  async (data: {email: string; password: string}) => {
    const response = await axios.post(config.LOG_IN, {
      email: data.email,
      password: data.password,
    });
    return response.data;
  },
);

export const signInSlice = createSlice({
  name: 'signIn',
  initialState,
  reducers: {
    logout(state) {
      state.loading = 'idle';
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
  extraReducers: builder => {
    builder
      .addCase(signInThunk.pending, state => {
        state.loading = 'pending';
      })
      .addCase(signInThunk.fulfilled, (state, action) => {
        if (action.payload === 'E-mail or password are inccorect!') {
          alertService.alert('warning', action.payload);
          state.loading = 'idle';
        } else {
          state.loggedUser = {
            id: action.payload.users_id,
            firstName: action.payload.users_name,
            lastName: action.payload.users_lastname,
            email: action.payload.users_email,
            password: action.payload.users_password,
          };
          state.isLoggedIn = true;
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
          state.loading = 'succeeded';
        }
      })
      .addCase(signInThunk.rejected, state => {
        state.loading = 'failed';
        alertService.alert(
          'danger',
          'Something went wrong. Please try again later!',
        );
      });
  },
});

export const {logout} = signInSlice.actions;

export default signInSlice.reducer;
