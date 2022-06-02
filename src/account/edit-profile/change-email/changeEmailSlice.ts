import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import {alertService} from '../../../alertService';
import config from '../../../../config';

export interface InitialState {
  email: string;
  id: number;
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
  error: string;
}

const initialState: InitialState = {
  email: '',
  id: 0,
  loading: 'idle',
  error: '',
};

export const changeEmailThunk = createAsyncThunk(
  'changeEmail/changeEmailThunk',
  async (params: {id: number; email: string}) => {
    const payload = {
      id: params.id,
      email: params.email,
    };
    const response = await axios.post(config.CHANGE_EMAIL, payload);
    return response.data;
  },
);

export const changeEmailSlice = createSlice({
  name: 'changeEmail',
  initialState,
  reducers: {
    resetChangeEmailFLow(state) {
      state.error = 'pending';
    },
  },
  extraReducers: builder => {
    builder
      .addCase(changeEmailThunk.pending, state => {
        state.loading = 'pending';
      })
      .addCase(changeEmailThunk.fulfilled, (state, action) => {
        state.loading = 'succeeded';

        if (action.payload !== 'Success') {
          alertService.alert('warning', action.payload);
        } else {
          state.error = 'accept';
        }
      })
      .addCase(changeEmailThunk.rejected, state => {
        state.loading = 'failed';
        alertService.alert(
          'warning',
          'Something went wrong. Please, try again later!',
        );
      });
  },
});
export const {resetChangeEmailFLow} = changeEmailSlice.actions;

export default changeEmailSlice.reducer;
