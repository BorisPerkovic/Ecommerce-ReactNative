import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import config from '../../../config';
import {alertService} from '../../alertService';

export interface InitialState {
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
  error: string;
}

const initialState: InitialState = {
  loading: 'idle',
  error: '',
};

export const deleteAccountThunk = createAsyncThunk(
  'deleteAccount/deleteAccountThunk',
  async (params: {id: number}) => {
    const payload = {
      id: params.id,
    };

    const response = await axios.post(config.DELETE_ACCOUNT, payload);
    return response.data;
  },
);

export const deleteAccountSlice = createSlice({
  name: 'deleteAccount',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(deleteAccountThunk.pending, state => {
        state.loading = 'pending';
      })
      .addCase(deleteAccountThunk.fulfilled, state => {
        state.loading = 'succeeded';
      })
      .addCase(deleteAccountThunk.rejected, state => {
        state.loading = 'failed';
        alertService.alert('warning', 'wentWrong', 'account');
      });
  },
});

export default deleteAccountSlice.reducer;
