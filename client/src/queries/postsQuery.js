import { gql } from '@apollo/client'; 

const GET_POSTS = gql`
    query getPosts{
        posts{
            _id
            title
            description
            photoUrl
            likes{
                _id
                postId
                userId
            }
            comments{
                _id
            }
            author{
                _id
                firstName
                lastName
            }
        }
    }
`

export { GET_POSTS }; 