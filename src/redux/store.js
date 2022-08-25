import { configureStore } from "@reduxjs/toolkit";
import projectsSlice from "./sliceReducers/projectsSlice";


export default configureStore({
    reducer: {
        projects: projectsSlice,
    },
});