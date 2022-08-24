// MUI Imports
import { Grid, Stack, Card } from "@mui/material";


function Projects() {
    return (
        <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
        >
            <Stack>
                <Card
                    elevation={4}
                    sx={{
                        padding: "1em",
                        margin: '1em',
                        width: '350px',
                        minHeight: '350px'
                    }}
                >
                    Project 1
                </Card>
            </Stack>
        </Grid>
    )
}
export default Projects;