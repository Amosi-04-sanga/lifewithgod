import { request, gql } from "graphql-request";

const graphqlAPI = process.env.GRAPHQL_API

export const getPosts = async () => {

    const query = gql`
    query MyQuery {
      postsConnection {
        edges {
          cursor
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

   const results = await request(graphqlAPI, query)
   return request.postConnection.edges
}