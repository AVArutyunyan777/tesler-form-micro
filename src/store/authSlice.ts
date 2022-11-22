import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import { AppState } from "./store";
import { HYDRATE } from "next-redux-wrapper";

// Type for our state
export interface AuthState {
    authState: boolean;
    number: number
}

// Initial state
const initialState: AuthState = {
    authState: false,
    number: 0,
};

// Actual Slice, reducers
export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setAuthState(state, action: PayloadAction<boolean>) {
            state.authState = action.payload;
        },
        setNumber(state, action: PayloadAction<number>) {
            state.number = action.payload
        }
    },
});

export default authSlice.reducer;
