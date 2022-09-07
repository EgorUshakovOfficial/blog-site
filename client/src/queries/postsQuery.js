import { gql } from '@apollo/client'; 

const GET_POSTS = gql`
    query getPosts($first: Int!, $offset: Int!){
        posts(first: $first, offset: $offset){
            _id
            title
            description
            photoUrl
            likes{
                _id
            }
            comments{
                _id
            }
        }
    }
`

export { GET_POSTS }; 