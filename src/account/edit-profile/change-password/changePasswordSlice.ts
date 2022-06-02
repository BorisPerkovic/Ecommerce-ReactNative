import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import {alertService} from '../../../alertService';
import config from '../../../../config';

export interface InitialState {
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
  error: string;
}

const initialState: InitialState = {
  loading: 'idle',
  error: '',
};

export const changePasswordThunk = createAsyncThunk(
  'changePassword/changePasswordThunk',
  async (params: {id: number; password: string; repassword: string}) => {
    const payload = {
      id: params.id,
      password: params.password,
      repassword: params.repassword,
    };
    const response = await axios.post(config.CHANGE_PASSWORD, payload);
    return response.data;
  },
);

export const changePasswordSlice = createSlice({
  name: 'changePassword',
  initialState,
  reducers: {
    resetChangePasswordFLow(state) {
      state.error = 'idle';
    },
  },
  extraReducers: builder => {
    builder
      .addCase(changePasswordThunk.pending, state => {
        state.loading = 'pending';
      })
      .addCase(changePasswordThunk.fulfilled, (state, action) => {
        state.loading = 'succeeded';

        if (action.payload !== 'Success') {
          alertService.alert('warning', action.payload);
        } else {
          state.error = 'accept';
        }
      })
      .addCase(changePasswordThunk.rejected, state => {
        state.loading = 'failed';
        alertService.alert(
          'warning',
          'Something went wrong. Please, try again later!',
        );
      });
  },
});
export const {resetChangePasswordFLow} = changePasswordSlice.actions;

export default changePasswordSlice.reducer;
