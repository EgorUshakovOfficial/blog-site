import { gql } from '@apollo/client'; 

const UPLOAD_PIC = gql`
    mutation uploadProfilePic($file: Upload!){
        uploadProfilePic(file: $file){
            photoUrl
        }
    }
`; 

export { UPLOAD_PIC }; 