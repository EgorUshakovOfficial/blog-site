import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import {
    faThumbsUp,
    faComment
} from '@fortawesome/free-solid-svg-icons'
import { useContext } from 'react'; 
import { AuthContext } from '../context/AuthProvider'; 
import ReactionsResults from './ReactionsResults';
import ReactionControls from './ReactionControls';
export default function Reactions({numLikes, numComments, postId}) {
    const { token } = useContext(AuthContext); 
    return (
        <>
            <ReactionsResults numComments={numComments} numLikes={numLikes} postId={postId} />
            {token && <ReactionControls postId={postId} />}
        </>
    )
}