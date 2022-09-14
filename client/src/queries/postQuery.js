import { gql } from '@apollo/client'; 

const GET_POST = gql`
    query getPost($id: String!){
        post(id: $id){
            _id
            title
            description
            createdAt
            photoUrl
            author{
                _id
                firstName
                lastName
            }
        }
    }
`; 

export { GET_POST }; 