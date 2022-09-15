import { useState, useEffect} from 'react'; 
import { useMutation } from '@apollo/client'; 
import { UPLOAD_PIC } from '../../mutations/pictureMutation'; 
import { GET_USER } from '../../queries/userQuery';

export default function EditProfilePic() {
    const [newPic, setNewPic] = useState(null); 

    // Upload profile picture mutation
    const [uploadProfilePic] = useMutation(UPLOAD_PIC, {
        variables: { file: newPic }, 
        context: {
            headers: {
                "apollo-require-preflight": true
            }
        },
        update(cache, { data }) {
            // Cache of previous user 
            let { user } = cache.readQuery({ query: GET_USER }); 
            user = { ...user }; 

            user.photoUrl = data.uploadProfilePic.photoUrl;

            // Update cache of user 
            cache.writeQuery({
                query: GET_USER, 
                data: { user: {...user}}
            })
        }
    })

    // Hook used for uploading photo
    useEffect(() => {
        console.log(newPic)
        if (newPic !== null) {
            uploadProfilePic(newPic)
        }
    }, [newPic]);

    return (
        <label id="edit-profile-pic">
            <input type="file" accept="image/*" onChange={e => setNewPic(e.target.files[0])} style={{display: "none"}} />
            Edit picture
        </label>
    )
}