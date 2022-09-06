import { InMemoryCache, ApolloClient, HttpLink} from '@apollo/client'; 
import { setContext } from '@apollo/client/link/context'; 

const getClient = token => {
    // Http link 
    const httpLink = new HttpLink({
        uri: "http://localhost:4000/graphql"
    }); 

    // Authentication link 
    const authLink = setContext((_, { headers }) => {
        return {
            headers: {
                ...headers,
                authorization: token ? `bearer ${token}` : ""
            }
        }
    })
    
    const client = new ApolloClient({
        link: authLink.concat(httpLink),
        cache: new InMemoryCache()
    })

    return client; 
}

export { getClient };


