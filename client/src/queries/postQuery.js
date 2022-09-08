import { gql } from '@apollo/client'; 

const GET_POST = gql`
    query getPost($id: String!){
        post(id: $id){
            title
            description
            createdAt
            photoUrl
            author{
                userId
                firstName
                lastName
            }
        }
    }
`; 

export { GET_POST }; 