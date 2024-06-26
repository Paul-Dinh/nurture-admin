import { configureStore } from '@reduxjs/toolkit';
import loaderSlice from '../features/loader/loaderSlice';
import marginSlice from '../features/margin/marginSlice';
import bodySlice from '../features/body/bodySlice';
import currentPageSlice from '../features/currentPage/currentPageSlice';
import currentPageNameSlice from '../features/currentPageName/currentPageNameSlice';
import editSlice from '../features/edit/editSlice';
export const store = configureStore({
  reducer: {
    loader: loaderSlice,
    margin: marginSlice,
    body: bodySlice,
    currentPage: currentPageSlice,
    currentPageName: currentPageNameSlice,
    edit: editSlice,
  },
});
