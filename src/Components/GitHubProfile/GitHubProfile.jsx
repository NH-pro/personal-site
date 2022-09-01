import { useQuery, gql } from "@apollo/client";

const GITHUB_QUERY = gql `
{
    user(login: "NH-pro") {
      avatarUrl
      bio
      url
    }
  }
`;

const GitHubProfile = () => {
    const { loading, error, data } = useQuery(GITHUB_QUERY);

    if (loading) return "Fetching my profile from GitHub!";
    if (error) return <pre>{error.message}</pre>

    console.log(data)
    return(
        <>
            <img alt="picMe" className="mePic" src={data.user.avatarUrl} />
        </>
    )
}
        
export default GitHubProfile;