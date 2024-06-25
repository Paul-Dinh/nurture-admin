import { createSlice } from '@reduxjs/toolkit';

export const currentPageNameSlice = createSlice({
  name: 'margin',
  initialState: {
    value: 'static-content',
  },
  reducers: {
    setCurrentPageName: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setCurrentPageName } = currentPageNameSlice.actions;
export const currentPageName = (state: { currentPageName: { value: string } }) =>
  state.currentPageName.value;
export default currentPageNameSlice.reducer;
