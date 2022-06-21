import { ApolloClient, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4odg83i1vrb01xmb4dnbhnn/master',
  cache: new InMemoryCache()
})
