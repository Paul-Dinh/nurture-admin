import { createSlice } from '@reduxjs/toolkit';

export const currentPageSlice = createSlice({
  name: 'margin',
  initialState: {
    value: 'static-content',
  },
  reducers: {
    setCurrentPage: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setCurrentPage } = currentPageSlice.actions;
export const currentPage = (state: { currentPage: { value: string } }) => state.currentPage.value;
export default currentPageSlice.reducer;
