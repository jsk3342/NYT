import { createSlice } from '@reduxjs/toolkit';

const headlineSlice = createSlice({
  name: 'headline',
  initialState: {
    focus: false,
    keyword: '',
  },
  reducers: {
    changeKeyword(state, action) {
      state.keyword = action.payload;
    },
  },
});

export const { changeKeyword } = headlineSlice.actions;
export default headlineSlice;
