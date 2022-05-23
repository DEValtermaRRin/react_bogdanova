import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ProfileState {
  visible: boolean;
  name: string;
}

const initialState: ProfileState = {
  visible: true,
  name: 'default name',
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    toggleProfile: (state: ProfileState) => {
      state.visible = !state.visible;
    },
    changeName: (state: ProfileState, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
  },
});

export const { toggleProfile, changeName } = profileSlice.actions;
export const profileReducer = profileSlice.reducer;
