// Component Imports
import GitHubRepos from "../GitHubRepos/GitHubRepos";
// MUI Imports
import { Grid, Stack } from "@mui/material";


// Exported component
function Projects() {
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
            </Stack>
        </Grid>
    )
}
export default Projects;