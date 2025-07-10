import { configureStore } from '@reduxjs/toolkit'
import sidebarReducer from './features/sidebarSlice'
import overlayReducer from './features/overlaySlice'

export const store = configureStore({
  reducer: {
    sidebar : sidebarReducer,
    overlay: overlayReducer,
  },
})


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;