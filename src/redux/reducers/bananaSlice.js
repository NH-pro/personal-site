import { createSlice } from "@reduxjs/toolkit";

const bananaSlice = createSlice({
    name: 'bananaScore', // name of reducer
    initialState: {
        projects: {missed: 0, caught: 0},
        isLoading: false
    },
    reducers: {
        getBananaScoreFetch: (state) => {
            state.isLoading = true;
        },
        getBananaScoreSuccess: (state, action) => {
            state.projects = action.payload;
            state.isLoading = false;
        },
        getBananaScoreFailure: (state) => {
            state.isLoading = false;
        }
    }
})

export const { getBananaScoreFetch, getBananaScoreSuccess, getBananaScoreFailure } = bananaSlice.actions;

export default bananaSlice.reducer;