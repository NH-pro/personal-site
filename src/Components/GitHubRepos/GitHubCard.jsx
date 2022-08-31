// MUI Imports
import { Card, Typography } from "@mui/material";

function GitHubCard(gitPin) {
    const gitData = gitPin.gitPin;

    function clickHandle(url) {
        window.open(url, '_blank').focus();
    }


    console.log('this is gitData', gitData);
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