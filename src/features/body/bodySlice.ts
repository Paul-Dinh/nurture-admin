import { createSlice } from '@reduxjs/toolkit';

export const bodySlice = createSlice({
  name: 'margin',
  initialState: {
    value: [],
  },
  reducers: {
    setBody: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setBody } = bodySlice.actions;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const bodyValue = (state: { body: { value: any } }) => state.body.value;
export default bodySlice.reducer;
