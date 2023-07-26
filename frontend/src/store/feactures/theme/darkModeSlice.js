import { createSlice } from '@reduxjs/toolkit'

/**
 * Redux dark mode Slice
 */
export const darkModeSlice = createSlice({
    name: 'darkMode',
    initialState: {
        darkModeState: JSON.parse(localStorage.getItem("darkMode")) || false,
    },
    reducers: {
        toggleDarkMode: (state, action) => {
            state.darkModeState = action.payload;
            localStorage.setItem("darkMode", JSON.stringify(action.payload));
        },
    }
})

// Action for each case reducer function
export const { toggleDarkMode } = darkModeSlice.actions

export default darkModeSlice.reducer