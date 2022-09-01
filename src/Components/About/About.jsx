// MUI Imports
import { Grid } from "@mui/material";

// Component Imports
import GitHubProfile from "../GitHubProfile/GitHubProfile";

function About() {
    return (
        <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            sx={{
                marginTop: '7em'
            }}
        >
            <GitHubProfile />
        </Grid>
    )
}
export default About;