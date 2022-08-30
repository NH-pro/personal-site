import { useQuery, gql } from "@apollo/client";

const GITHUB_QUERY = gql`
{
    user(login: "NH-pro") {
      pinnedItems(first: 6) {
        edges {
          node {
            ... on Repository {
              id
              name
              url
              createdAt
              description
            }
          }
        }
      }
      avatarUrl
      contributionsCollection {
        totalCommitContributions
      }
    }
  }
`;

const GitHubRepos = () => {
    const { loading, error, data } = useQuery(GITHUB_QUERY);

    if (loading) return "Loading...";
    if (error) return <pre>{error.message}</pre>

    console.log('this is github data', data);
    return(
        <>
        </>
    )

}
export default GitHubRepos;