import { graphql } from "graphql";
import { request, gql, GraphQLClient } from "graphql-request";

// Apparently GraphQLClient is modern way to get to endpoint...
// const graphqlAPI = process.env.GRAPHCMS_ENDPOINT;


export const getPosts = async () => {

  const graphQLClient = new GraphQLClient(
    process.env.GRAPHCMS_ENDPOINT 
  );

  const query = gql`
    query MyQuery {
      postsConnection {
        edges {
          node {
            author {
              bio
              name
              id
              photo {
                url
              }
            }
            createdAt
            slug
            title
            excerpt
            featuredImage {
              url
            }
            categories {
              name
              slug
            }
          }
        }
      }
    }
  `;
  // const result = await request(graphqlAPI, query);
  const result = await graphQLClient.request(query);

  return result.postsConnection.edges;
};
