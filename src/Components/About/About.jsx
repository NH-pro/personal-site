// MUI Imports
import { Grid, Card, Typography } from "@mui/material";

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
                marginTop: '6em',
            }}
        >
            <GitHubProfile />
            <Card
                elevation={4}
                sx={{
                    margin: '2em',
                    padding: '1em',
                    backgroundColor: 'rgba(135, 217, 226, 0.90)',
                    border: '2px solid rgb(15, 255, 215)',
                    boxShadow: '0 0 20px rgba(43, 247, 213, 0.62)',
                    maxWidth: '900px'
                }}
            >
                <Typography
                    variant="h6"
                    sx={{
                        fontWeight: 'bold'
                    }}
                >
                    Full Stack Software Developer | Board and Card Game Enthusiast
                </Typography>
                <br/>
                <Typography>
                    I like to write my code with purpose and actively make efforts to keep it organized and easy to understand.
                    I'm always looking for cool new tools to try and implement into my projects.
                    Love chatting about tabletop games 🎲 , disc golf 🥏, and how much I like icecream!🍦
                </Typography>
            </Card>
            
        </Grid>
    )
}
export default About;