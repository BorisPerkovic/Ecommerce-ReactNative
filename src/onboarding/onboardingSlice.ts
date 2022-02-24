import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface OnBoardingState {
  isOnboardingScreen: boolean | null;
}

const initialState: OnBoardingState = {isOnboardingScreen: null};

const onboardingSlice = createSlice({
  initialState,
  name: 'onboarding',
  reducers: {
    setIsOnboardingSeen: (state, {payload}: PayloadAction<boolean>) => {
      state.isOnboardingScreen = payload;
    },
  },
});

export const {setIsOnboardingSeen} = onboardingSlice.actions;

export default onboardingSlice.reducer;
