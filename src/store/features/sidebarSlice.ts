import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
  initialized: false,
};

const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isOpen = !state.isOpen;
    },
    setSidebar: (state, action) => {
      state.isOpen = action.payload;
    },
    setInitialSidebarState: (state, action) => {
      if (!state.initialized) {
        state.isOpen = action.payload
        state.initialized = true
      }
    },
  },
});

export const { toggleSidebar, setSidebar, setInitialSidebarState } = sidebarSlice.actions;
export default sidebarSlice.reducer;