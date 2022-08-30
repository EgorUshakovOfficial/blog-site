import { gql } from 'apollo-server'; 

const typeDefs = gql`
    type Query{
        message: String! 
    }
    
    type User{
        firstName: String! 
        lastName: String! 
        email: String! 
    }
`; 

export { typeDefs };