import { gql } from '@apollo/client'; 

const POST_MUTATION = gql`
    mutation createPost($title: String!, $description: String!, $file: Upload!){
        createPost(title: $title, description: $description, file: $file){
            title
            description
            author{
                userId
            }
        }
    }
`

export { POST_MUTATION }; 