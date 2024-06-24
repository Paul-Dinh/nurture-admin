import { createSlice } from '@reduxjs/toolkit';

export const currentPageSlice = createSlice({
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

export const { setCurrentPageName } = currentPageSlice.actions;
export const currentPage = (state: { currentPage: { value: string } }) => state.currentPage.value;
export default currentPageSlice.reducer;
