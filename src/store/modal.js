import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
  name: 'modalSlice',
  initialState: { modal: false },
  reducers: {
    showModal(state) {
      state.modal = true;
    },
    nonModal(state) {
      state.modal = false;
    },
  },
});

export const { showModal, nonModal } = modalSlice.actions;
export default modalSlice;
