import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import {alertService} from '../../alertService';

export interface InitialState {
  user: {
    name?: string;
    lastName?: string;
    email?: string;
    password?: string;
    repassword?: string;
  };
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
  error: string;
}

const initialState: InitialState = {
  user: {
    name: '',
    lastName: '',
    email: '',
    password: '',
    repassword: '',
  },
  loading: 'idle',
  error: '',
};

export const registerUserThunk = createAsyncThunk(
  'registration/registerUserThunk',
  async (params: {url: string; data: any}) => {
    const url = params.url;
    const data = params.data;
    const response = await axios.post(url, data);
    return response.data;
  },
);

export const registrationSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    addUserToRegister(state, {payload}) {
      state.user = payload;
    },
    resetIsLoading(state) {
      state.error = '';
    },
  },
  extraReducers: builder => {
    builder
      .addCase(registerUserThunk.pending, state => {
        state.loading = 'pending';
      })
      .addCase(registerUserThunk.fulfilled, (state, action) => {
        state.loading = 'succeeded';

        if (action.payload !== 'Proceed') {
          alertService.alert('warning', action.payload);
        } else {
          state.error = 'accept';
        }
      })
      .addCase(registerUserThunk.rejected, state => {
        state.loading = 'failed';
        alertService.alert(
          'warning',
          'Something went wrong. Please, try again later!',
        );
      });
  },
});

export const {addUserToRegister, resetIsLoading} = registrationSlice.actions;

export default registrationSlice.reducer;
