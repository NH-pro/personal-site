// MUI Imports
import { Card } from "@mui/material";

function GitHubCard(gitPin) {
    const gitData = gitPin.gitPin;

    console.log('this is gitData', gitData);
    return (
        <Card
            elevation={4}
        >
            <h3>{gitData.node.name}</h3>
        </Card>
    )
}

export default GitHubCard;