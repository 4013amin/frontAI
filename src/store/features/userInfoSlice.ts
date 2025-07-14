// stores/authSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface UserInfoState {
  currentPlanId: string
}

const initialState: UserInfoState = { currentPlanId: "" }

export const userInfoSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCurrentPlanId: (state, action: PayloadAction<string>) => {
      state.currentPlanId = action.payload
    },
    clearCurrentPlanId: state => {
      state.currentPlanId = ""
    }
  }
})


export const { setCurrentPlanId, clearCurrentPlanId  } = userInfoSlice.actions

export default userInfoSlice.reducer