import {
    ApolloProvider,
    ApolloClient,
    InMemoryCache
  } from "@apollo/client";



export default function AppApolloProvider(props:any) {
    const client = new ApolloClient({
        uri: '/graphql',
        cache: new InMemoryCache()
    });

    return (
    <ApolloProvider client={client}>
        {props.children}
    </ApolloProvider>)
}