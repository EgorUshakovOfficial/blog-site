import { gql } from '@apollo/client'; 

const GET_USER = gql`
    query getUser{
        user{
            _id
            firstName
            lastName
            likes{
                _id
                userId
                postId
            }
            comments{
                _id
                userId
            }
            posts{
                _id
                title
                photoUrl
                description
                comments{
                    _id
                }
                likes{
                    _id
                    userId
                    postId
                }
                author{
                    userId
                }
            }
        }
    }
`; 

export { GET_USER }; 