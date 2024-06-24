import { createSlice } from '@reduxjs/toolkit';

export const marginSlice = createSlice({
  name: 'margin',
  initialState: {
    value: '65px',
  },
  reducers: {
    sideBarOn: (state) => {
      state.value = '240px';
    },
    sideBarOff: (state) => {
      state.value = '65px';
    },
  },
});

export const { sideBarOn, sideBarOff } = marginSlice.actions;
export const marginValue = (state: { margin: { value: string } }) => state.margin.value;
export default marginSlice.reducer;
