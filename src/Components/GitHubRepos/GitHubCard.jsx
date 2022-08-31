// MUI Imports
import { Card, Typography } from "@mui/material";

// Exported component function
function GitHubCard(gitPin) {
    const gitData = gitPin.gitPin;

    // When user clicks on a project card, open a new tab to the project's url
    function clickHandle(url) {
        window.open(url, '_blank').focus();
    }

    // Return render
    return (
        <Card
            onClick={() => clickHandle(gitData.node.url)}
            elevation={4}
            sx={{
                padding: '1em'
            }}
        >
            <Typography
                variant="h5"
            >
                {gitData.node.name}
            </Typography>
            <Typography
            >
                {gitData.node.createdAt}
            </Typography>
            <Typography
            >
                {gitData.node.description}
            </Typography>
        </Card>
    )
}

export default GitHubCard;