// Apollo Imports
import { useQuery, gql } from "@apollo/client";

// MUI Imports
import { Card, Typography, Stack } from "@mui/material";

// Component Imports
import CreateBanana from "../Banana/CreateBanana";

const GITHUB_QUERY = gql `
{
    user(login: "NH-pro") {
      avatarUrl
      bio
      url
    }
  }
`;

function picClickHandle(url) {
    window.open(url, '_blank').focus();
}

function mouseOverMeHandle() {
    CreateBanana();
}

const GitHubProfile = () => {
    const { loading, error, data } = useQuery(GITHUB_QUERY);

    if (loading) return "Fetching my profile from GitHub!";
    if (error) return <pre>{error.message}</pre>

    return(
        <Stack
            id="gitHubProfile"
            direction="row"
            justifyContent="center"
            alignItems="center"
        >
            <div
                id="imageBox"
            >
                <img 
                    className="mePic"
                    alt="picMe"
                    src={data.user.avatarUrl}
                    onClick={() => picClickHandle(data.user.url)}
                    onMouseOver={() => mouseOverMeHandle()}
                />
            </div>
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
                    variant="h5"
                >
                    Hi, my name is Neil and welcome to my web page!
                </Typography>
            </Card>
        </Stack>
    )
}
        
export default GitHubProfile;