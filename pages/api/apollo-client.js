// Found on https://www.apollographql.com/blog/apollo-client/next-js/next-js-getting-started/
import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_STRAPI_API_URL,
  cache: new InMemoryCache(),
});

export const jokes = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_STRAPI_JOKES_URL,
  cache: new InMemoryCache(),
  headers: {
    "X-RapidAPI-Key": "f1eac511f0mshb3b2a3d079382a1p1bfcc3jsn2da47e2c2b14",
    "X-RapidAPI-Host": "dad-jokes.p.rapidapi.com",
  },
});

export default client;
