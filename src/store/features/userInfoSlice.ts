import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface UserInfoState {
  currentPlanId: string
  selectedArticleTitle: string
}

const initialState: UserInfoState = {
  currentPlanId: "",
  selectedArticleTitle: ""
}

export const userInfoSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCurrentPlanId: (state, action: PayloadAction<string>) => {
      state.currentPlanId = action.payload
    },
    clearCurrentPlanId: state => {
      state.currentPlanId = ""
    },
    setSelectedArticleTitle: (state, action: PayloadAction<string>) => {
      state.selectedArticleTitle = action.payload
    },
    clearSelectedArticleTitle: state => {
      state.selectedArticleTitle = ""
    }
  }
})

export const {
  setCurrentPlanId,
  clearCurrentPlanId,
  setSelectedArticleTitle,
  clearSelectedArticleTitle
} = userInfoSlice.actions

export default userInfoSlice.reducer