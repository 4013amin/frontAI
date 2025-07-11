import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
  initialized: false,
  isMobile: false,
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
    setIsMobile: (state, action) => {
      state.isMobile = action.payload;
    },
  },
});

export const { toggleSidebar, setSidebar, setInitialSidebarState, setIsMobile } = sidebarSlice.actions;
export default sidebarSlice.reducer;