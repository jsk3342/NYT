import { configureStore, createSlice } from '@reduxjs/toolkit';
import headlineSlice from './headline';
import getArticleSlice from './getArticle';
import modalSlice from './modal';

export default configureStore({
  reducer: {
    headlineSlice: headlineSlice.reducer,
    getArticleSlice: getArticleSlice.reducer,
    modalSlice: modalSlice.reducer,
  },
});
