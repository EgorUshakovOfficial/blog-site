import { gql } from '@apollo/client'; 

const GET_USER = gql`
    query getUser{
        user{
            _id
            firstName
            lastName
            likes{
                _id
            }
            comments{
                _id
                userId
            }
            posts{
                _id
                title
                description
                authorId
            }
        }
    }
`; 

export { GET_USER }; 