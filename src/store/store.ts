import { configureStore } from "@reduxjs/toolkit"
import sidebarReducer from "./features/sidebarSlice"
import authReducer from "./features/authSlice"
import userInfoReducer from "./features/userInfoSlice"
import tempTokenReducer from "./features/tempTokenSlice"

export const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    auth: authReducer,
    userInfo: userInfoReducer,
    tempToken: tempTokenReducer
  }
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch