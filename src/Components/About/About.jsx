// MUI Imports
import { Grid } from "@mui/material";

// Component Imports
import GitHubProfile from "../GitHubProfile/GitHubProfile";

function About() {
    return (
        <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            sx={{
                marginTop: '5em'
            }}
        >
            <GitHubProfile />
        </Grid>
    )
}
export default About;