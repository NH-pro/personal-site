// MUI Imports
import { Grid } from "@mui/material";

import GitHubRepos from "../GitHubRepos/GitHubRepos";

function About() {
    return (
        <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
        >
            <GitHubRepos />
        </Grid>
    )
}
export default About;