import { createSlice } from '@reduxjs/toolkit';

export const loaderSlice = createSlice({
  name: 'loader',
  initialState: {
    value: false,
  },
  reducers: {
    loadingOn: (state) => {
      state.value = true;
    },
    loadingOff: (state) => {
      state.value = false;
    },
  },
});

export const { loadingOn, loadingOff } = loaderSlice.actions;
export const loading = (state: { loader: { value: boolean } }) => state.loader.value;
export default loaderSlice.reducer;
