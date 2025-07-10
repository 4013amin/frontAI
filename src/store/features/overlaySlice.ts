import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface OverlayState {
  isShown: boolean
  zIndex?: number
  onCloseCallback?: () => void
}

const initialState: OverlayState = {
  isShown: false,
  zIndex: 999,
  onCloseCallback: undefined,
}

const overlaySlice = createSlice({
  name: 'overlay',
  initialState,
  reducers: {
    showOverlay: (state, action: PayloadAction<{ zIndex?: number, onClose?: () => void }>) => {
      state.isShown = true
      state.zIndex = action.payload.zIndex ?? 999
      state.onCloseCallback = action.payload.onClose
    },
    hideOverlay: (state) => {
      state.isShown = false
      state.zIndex = 999
      state.onCloseCallback = undefined
    },
  },
})

export const { showOverlay, hideOverlay } = overlaySlice.actions;
export default overlaySlice.reducer;
