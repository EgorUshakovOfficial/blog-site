import { gql } from '@apollo/client'; 

const GET_USER = gql`
    query getUser{
        user{
            _id
            firstName
            lastName
            photoUrl
            likes{
                _id
                userId
                postId
            }
            comments{
                _id
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
                    _id
                }
            }
        }
    }
`; 

export { GET_USER }; 