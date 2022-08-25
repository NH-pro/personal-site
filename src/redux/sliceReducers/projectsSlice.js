import { createSlice } from "@reduxjs/toolkit";

const projectsSlice = createSlice({
    name: 'projects',
    initialState: {
        projects: []
    },
    reducers: {
        getProjects: (state, action) => {
            state.push(action.payload)
        },
    },
})

export default projectsSlice.reducer