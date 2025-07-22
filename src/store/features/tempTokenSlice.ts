import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface TempTokenState {
  token: string | null
}

const initialState: TempTokenState = { token: null }

const tempTokenSlice = createSlice({
  name: "tempToken",
  initialState,
  reducers: {
    setTempToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload
    },
    clearTempToken: state => {
      state.token = null
    }
  }
})

export const { setTempToken, clearTempToken } = tempTokenSlice.actions

export default tempTokenSlice.reducer