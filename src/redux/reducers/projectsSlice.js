import { createSlice } from "@reduxjs/toolkit";

const projectsSlice = createSlice({
    name: 'projects', // name of reducer
    initialState: {
        projects: [],
        isLoading: false
    },
    reducers: {
        getProjectsFetch: (state) => {
            state.isLoading = true;
        },
        getProjectsSuccess: (state, action) => {
            state.projects = action.payload;
            state.isLoading = false;
        },
        getProjectsFailure: (state) => {
            state.isLoading = false;
        }
    }
})

export const { getProjectsFetch, getProjectsSuccess, getProjectsFailure } = projectsSlice.actions;

export default projectsSlice.reducer;