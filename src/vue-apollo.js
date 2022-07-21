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