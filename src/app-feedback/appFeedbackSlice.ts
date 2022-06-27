import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import {alertService} from '../alertService';
import config from '../../config';

interface DataParams {
  users_id: number;
  ratings: number;
  comment: string;
}

export interface InitialState {
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
}

const initialState: InitialState = {
  loading: 'idle',
};

export const appFeedbackThunk = createAsyncThunk(
  'appFeedback/appFeedbackThunk',
  async (data: DataParams) => {
    const response = await axios.post(config.APP_FEEDBACK, data);
    return response.data;
  },
);

export const appFeedbackSlice = createSlice({
  name: 'appFeedback',
  initialState,
  reducers: {
    resetfeedbackState(state) {
      state.loading = 'idle';
    },
  },
  extraReducers: builder => {
    builder
      .addCase(appFeedbackThunk.pending, state => {
        state.loading = 'pending';
      })
      .addCase(appFeedbackThunk.fulfilled, (state, action) => {
        if (action.payload !== 'Proceed') {
          alertService.alert('warning', action.payload, 'account');
          state.loading = 'idle';
        } else {
          state.loading = 'succeeded';
        }
      })
      .addCase(appFeedbackThunk.rejected, state => {
        state.loading = 'failed';
        alertService.alert('warning', 'wentWrong', 'account');
      });
  },
});

export const {resetfeedbackState} = appFeedbackSlice.actions;

export default appFeedbackSlice.reducer;
