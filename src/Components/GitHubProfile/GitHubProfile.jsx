// Apollo Imports
import { useQuery, gql } from "@apollo/client";
// MUI Imports
import { Card, Typography, Stack } from "@mui/material";
// Component Imports
import CreateBanana from "../../utils/banana/createBanana";
// Store Imports
import { useSelector, useDispatch } from "react-redux";


const GitHubProfile = () => {
    const dispatch = useDispatch();

    // Banana Redux Store
    const bananaStore = useSelector((state) => state.bananaReducer)

    // Apollo GraphQl Query
    const GITHUB_QUERY = gql `
        {
            user(login: "NH-pro") {
            avatarUrl
            bio
            url
            }
        }
    `;
    const { loading, error, data } = useQuery(GITHUB_QUERY);
    if (loading) return "Fetching my profile from GitHub!";
    if (error) return <pre>{error.message}</pre>
    

    function picClickHandle(url) {
        window.open(url, '_blank').focus();
    }    

    return(
        <Stack
            id="gitHubProfile"
            direction="row"
            justifyContent="center"
            alignItems="center"
            sx={{
                marginTop: '2em'
            }}
        >
            <div id="imageBox">
                <img 
                    id=""
                    className="mePic"
                    alt="picMe"
                    src={data.user.avatarUrl}
                    onClick={() => picClickHandle(data.user.url)}
                    onMouseOver={() => CreateBanana(dispatch)}
                />
            </div>
            <Stack
                direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={3}
            >
                <Card
                    elevation={4}
                    sx={{
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
                <Card
                    elevation={4}
                    sx={{
                        padding: '.5em',
                        backgroundColor: 'rgba(135, 217, 226, 0.90)',
                        border: '2px solid rgb(15, 255, 215)',
                        boxShadow: '0 0 20px rgba(43, 247, 213, 0.62)',
                        minWidth: '550px',
                        maxWidth: '1000px',
                        textAlign: 'center'
                    }}
                >
                    <h2>Catch the Banana!</h2>
                    <h3> ⬅ Hover over my picture to send a banana!</h3>
                    <h4>
                        Missed: {bananaStore.missed}
                        <br/>
                        Caught: {bananaStore.caught}
                        <br/>
                        Catch Average: {Math.round((bananaStore.caught / (bananaStore.missed + bananaStore.caught)) * 100) / 100}
                    </h4>
                </Card>
            </Stack>
        </Stack>
    )
}
        
export default GitHubProfile;