import { createSlice } from '@reduxjs/toolkit';

export const editSlice = createSlice({
  name: 'margin',
  initialState: {
    value: false,
  },
  reducers: {
    setEditOff: (state) => {
      state.value = false;
    },
    setEditOn: (state) => {
      state.value = true;
    },
  },
});

export const { setEditOn, setEditOff } = editSlice.actions;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const edit = (state: { edit: { value: any } }) => state.edit.value;
export default editSlice.reducer;
