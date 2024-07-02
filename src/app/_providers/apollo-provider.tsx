import { ApolloClient, InMemoryCache, ApolloProvider as Provider, HttpLink, from } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'

import { PropsWithChildren } from 'react'

const httpLink = new HttpLink({
  uri: process.env.NEXT_PUBLIC_HASURE_URL,
})

const authLink = setContext((_, { headers }) => {
  const contentType = 'application/json'
  const xHasuraAdminSecret = process.env.NEXT_PUBLIC_X_HASURE_ADMIN_SECRET

  return {
    headers: {
      ...headers,
      'content-type': contentType,
      'x-hasura-admin-secret': xHasuraAdminSecret,
    },
  }
})

const apoloClient = new ApolloClient({
  link: from([authLink, httpLink]),
  cache: new InMemoryCache(),
})

export function ApolloProvider({ children }: PropsWithChildren) {
  return <Provider client={apoloClient}>{children}</Provider>
}
