import { configureStore, createSlice } from '@reduxjs/toolkit';

const keyword = createSlice({
  name: 'keyword',
  initialState: 'korea',
  reducers: {
    changeKeyword() {
      return 'usa';
    },
  },
});

export const { changeKeyword } = keyword.actions;

const homeIconState = createSlice({
  name: 'homeIconState',
  initialState: {
    loading: false,
    data: [],
    isState: true,
    error: null,
  },
  reducers: {
    onHomeIcon(state) {
      return (state.isState = true);
    },
    offHomeIcon(state) {
      return (state.isState = false);
    },
  },
});

export const { onHomeIcon, offHomeIcon } = homeIconState.actions;

export default configureStore({
  reducer: {
    keyword: keyword.reducer,
  },
});
