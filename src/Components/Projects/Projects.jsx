// --- Imports to use a database ---
// import { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { getProjectsFetch } from '../../redux/reducers/projectsSlice';

// Component Imports
import GitHubRepos from "../GitHubRepos/GitHubRepos";

// MUI Imports
import { Grid, Stack } from "@mui/material";

function Projects() {

    // --- Stuff to use if I wanted to use a database ---
    // const projects = useSelector(state => state.projects.projects);
    // const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(
    //         getProjectsFetch()
    //     )
    // }, [dispatch]);

    return (
        <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            sx={{
                marginTop: '6em'
            }}
        >
            <Stack
                spacing={2}
                sx={{
                    margin: '1em 5em',
                }}
            >
                <GitHubRepos />
                    {/* {projects.map((item) => {
                        return(
                            <div
                                key={item.id}
                            >
                                <h2>{item.name}</h2>
                                <ul>
                                    <li>Duration: {item.duration}</li>
                                    <li>{item.description}</li>
                                </ul>
                            </div>
                        )
                    })} */}
            </Stack>
        </Grid>
    )
}
export default Projects;