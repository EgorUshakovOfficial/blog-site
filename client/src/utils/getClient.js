import { InMemoryCache, ApolloClient, HttpLink } from '@apollo/client'; 
import { setContext } from '@apollo/client/link/context'; 
import { createUploadLink } from 'apollo-upload-client';

const getClient = token => {
    // Upload link 
    const uploadLink = createUploadLink({
        uri: 'http://localhost:4000/graphql', 
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


    // Cache 
    const cache = new InMemoryCache({
        typePolicies: {
            Query: {
                fields: {
                    post: {
                        author: {
                            merge(existing, incoming) {
                                return incoming
                            }
                        }
                    }
                }
            },
            Mutation: {
                fields: {
                    createPost: {
                        author: {
                            merge(existing, incoming) {
                                return incoming
                            }
                        }
                    }
                }
            },
            Post: {
                fields: {
                    likes: {
                        merge(existing, incoming) {
                            return incoming;
                        }
                    }
                }
            },
            User: {
                fields: {
                    likes: {
                        merge(existing, incoming) {
                            return incoming
                        }
                    }, 
                    comments: {
                        merge(existing, incoming) {
                            return incoming;
                        }
                    }
                }
            },
            Author: {
                keyFields: ["userId"]
            }
        }
    })

    const client = new ApolloClient({
        link: authLink.concat(uploadLink),
        cache
    })

    return client; 
}

export { getClient };


