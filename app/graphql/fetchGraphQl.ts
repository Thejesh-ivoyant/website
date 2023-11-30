import { strapiUrl } from "~/utils/urls";

export interface GraphQLResponse {
    data?: any;
    errors?: any[];
  }
  
 export async function fetchGraphQL(query: string): Promise<GraphQLResponse> {
    const url = `${strapiUrl}/graphql`;
    const headers = {
      'Content-Type': 'application/json',
    };
  
    const body = JSON.stringify({
      query,
      variables: {},
    });
  
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers,
        body,
      });
  
      const result: GraphQLResponse = await response.json();
  
      if (result.errors) {
        throw new Error(JSON.stringify(result.errors));
      }
  
      return result;
    } catch (error) {
      console.error('GraphQL Request Error:', error);
      throw new Error('GraphQL Request failed.');
    }
  }