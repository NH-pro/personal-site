// Apollo Imports
import { useQuery, gql } from "@apollo/client";

// MUI Imports
import { Card, Typography } from "@mui/material";

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

const GitHubProfile = () => {
    const { loading, error, data } = useQuery(GITHUB_QUERY);

    if (loading) return "Fetching my profile from GitHub!";
    if (error) return <pre>{error.message}</pre>

    return(
        <>
            <img 
                alt="picMe"
                className="mePic"
                src={data.user.avatarUrl}
                onClick={() => picClickHandle(data.user.url)}
            />
            <Card
                elevation={4}
                sx={{
                    margin: '2em',
                    padding: '1em',
                    backgroundColor: 'rgba(135, 217, 226, 0.90)',
                    border: '2px solid rgb(15, 255, 215)',
                    boxShadow: '0 0 20px rgba(43, 247, 213, 0.62)'
                }}
            >
                <Typography
                    variant="h5"
                >
                    Hi, my name is Neil and welcome to my web page!
                </Typography>
            </Card>
        </>
    )
}
        
export default GitHubProfile;