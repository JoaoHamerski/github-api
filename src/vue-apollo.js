import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core'

// HTTP connection to the API
const httpLink = createHttpLink({
  uri: 'https://api.github.com/graphql',
  headers: {
    authorization: 'Bearer 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'
  }
})

// Cache implementation
const cache = new InMemoryCache()

// Create the apollo client
const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
})

export default apolloClient