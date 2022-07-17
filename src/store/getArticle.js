import { createSlice } from '@reduxjs/toolkit';

const getArticleSlice = createSlice({
  name: 'getArticle',
  initialState: [],
  reducers: {
    addArticle(state, action) {
      state.push(...action.payload);
    },
  },
});

export const { addArticle } = getArticleSlice.actions;
export default getArticleSlice;
