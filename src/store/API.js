import { createSlice } from '@reduxjs/toolkit';

const APISlice = createSlice({
  name: 'API',
  initialState: {
    page: '&page=0',
  },
  reducers: {
    addArticle(state, action) {
      state.push(...action.payload);
    },
  },
});

export const { addArticle } = APISlice.actions;
export default APISlice;
