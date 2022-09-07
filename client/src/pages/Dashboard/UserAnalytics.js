import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faThumbsUp,
    faComment
} from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react'; 
import { UserContext } from '../../context/UserProvider'; 
export default function UserAnalytics({ numLikes, numComments, numPosts }) {
    const {posts, likes, comments } = useContext(UserContext); 
    return (
        <table id="user-analytics">
            <tr>
                <th>Likes <FontAwesomeIcon icon={faThumbsUp} /></th>
                <th>Comments <FontAwesomeIcon icon={faComment} /></th>
                <th>Posts</th>
            </tr>
            <tr>
                <td>{likes.length}</td>
                <td>{comments.length}</td>
                <td>{posts.length}</td>
            </tr>
        </table>
    )
}