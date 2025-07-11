// stores/authSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
    phoneNumber: string;
}

const initialState: AuthState = {
    phoneNumber: ''
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setPhoneNumber: (state, action: PayloadAction<string>) => {
            state.phoneNumber = action.payload;
        },
        clearPhoneNumber: (state) => {
            state.phoneNumber = '';
        }
    }
});


export const { setPhoneNumber, clearPhoneNumber } = authSlice.actions;
export default authSlice.reducer;