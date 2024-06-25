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

// Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch;
