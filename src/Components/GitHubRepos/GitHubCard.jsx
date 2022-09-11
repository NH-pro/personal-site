// MUI Imports
import { Card, Typography } from "@mui/material";

// Exported component function
function GitHubCard(gitPin) {
    const gitData = gitPin.gitPin;

    // When user clicks on a project card, open a new tab to the project's url
    function clickHandle(url) {
        window.open(url, '_blank').focus();
    }

    // Reformat repo creation date
    const gitDate = new Date(gitData.node.createdAt).toLocaleDateString();

    // Return render
    return (
        <Card
            onClick={() => clickHandle(gitData.node.url)}
            elevation={4}
            sx={{
                padding: '1em',
                backgroundColor: 'rgba(135, 217, 226, 0.90)',
                border: '2px solid rgb(15, 255, 215)',
                boxShadow: '0 0 20px rgba(43, 247, 213, 0.62)',
                maxWidth: '900px',
                cursor: 'pointer'
            }}
        >
            <Typography
                variant="h5"
                sx={{
                    fontWeight: 'bold'
                }}
            >
                {gitData.node.name}
            </Typography>
            <Typography
            >
                Created on: {gitDate}
            </Typography>
            <Typography
                sx={{
                    padding: '1em'
                }}
            >
                {gitData.node.description}
            </Typography>
        </Card>
    )
}

export default GitHubCard;