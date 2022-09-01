import { useQuery, gql } from "@apollo/client";
import GitHubCard from "./GitHubCard";

const GITHUB_QUERY = gql`
{
    user(login: "NH-pro") {
      pinnedItems(first: 6) {
        edges {
          node {
            ... on Repository {
              id
              name
              createdAt
              description
              url
            }
          }
        }
      }
    }
  }
`;

const GitHubRepos = () => {
    const { loading, error, data } = useQuery(GITHUB_QUERY);

    if (loading) return "Fetching my repos from GitHub!";
    if (error) return <pre>{error.message}</pre>

    console.log(data)
    return(
        <>
            {data.user.pinnedItems.edges.map((pinnedRepo) => {
                return (
                    <GitHubCard 
                        key={pinnedRepo.node.id}
                        gitPin={pinnedRepo}
                    />
                )
             })}
        </>
    )
}
        
export default GitHubRepos;