import { configureStore, createSlice } from '@reduxjs/toolkit';

const articleInfo = createSlice({
  name: 'articleInfo',
  initialState: {
    serchKeyword: '',
    serchDate: '',
    serchNaion: '',
  },
  reducers: {
    changeKeyword(state, action) {
      state.serchKeyword = action.payload;
    },
  },
});

export let { changeKeyword } = articleInfo.reducer;
export default configureStore({
  reducer: {
    articleInfo: articleInfo.reducer,
  },
});
