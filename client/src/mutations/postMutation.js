import { gql } from '@apollo/client'; 

const POST_MUTATION = gql`
    mutation createPost($title: String!, $description: String!, $file: Upload!){
        createPost(title: $title, description: $description, file: $file){
            title
            description
        }
    }
`

export { POST_MUTATION }; 