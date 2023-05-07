import { request, gql } from "graphql-request";

const graphqlAPI = process.env.GRAPHQL_API

export const getPosts = async () => {

   const query = `
       
   `

   const results = await request(graphqlAPI, query)
   return request.postConnection.edges
}