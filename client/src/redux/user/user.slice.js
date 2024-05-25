import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentUser: null,
    error: null,
    leading: false,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        signInstart: (state) => {
            state.leading = true;
            state.error = null;
        },
        signInSuccess: (state, action) => {
            state.currentUser = action.payload;
            state.loading = false;
            state.error = null;
        },
        signInFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
            
        },

    }
});


export const { signInstart, signInSuccess, signInFailure } = userSlice.actions;

export default userSlice.reducer;