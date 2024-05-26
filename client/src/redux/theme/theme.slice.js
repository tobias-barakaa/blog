 import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    theme: 'light'
}

const ThemeSlice = createSlice({
    name: 'them',
    initialState,
    reducers: {
        toggleTheme: (state) => {
            state.theme = state.theme === 'light' ? 'dark' : 'light'
        }
    }
})

export const { toggleTheme } = ThemeSlice.actions;

export default ThemeSlice.reducer;
