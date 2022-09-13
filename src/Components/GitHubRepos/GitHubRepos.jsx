// Apollo Imports
import { useQuery, gql } from "@apollo/client";
// Component Imports
import GitHubCard from "./GitHubCard";


// GraphQL query
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

// Exported component
const GitHubRepos = () => {
    const { loading, error, data } = useQuery(GITHUB_QUERY);

    if (loading) return "Fetching my repos from GitHub!";
    if (error) return <pre>{error.message}</pre>

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