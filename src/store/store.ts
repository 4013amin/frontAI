import { configureStore } from "@reduxjs/toolkit"
import sidebarReducer from "./features/sidebarSlice"
import authReducer from "./features/authSlice"
import userInfoReducer from "./features/userInfoSlice"
import tempTokenReducer from "./features/tempTokenSlice"
import articleReducer from "./features/articleSlice" 

export const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    auth: authReducer,
    userInfo: userInfoReducer,
    tempToken: tempTokenReducer,
    article: articleReducer 
  }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch