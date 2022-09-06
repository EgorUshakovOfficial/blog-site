import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faThumbsUp,
    faComment
} from '@fortawesome/free-solid-svg-icons';
export default function UserAnalytics({numLikes, numComments, numPosts}) {
    return (
        <table id="user-analytics">
            <tr>
                <th>Likes <FontAwesomeIcon icon={faThumbsUp} /></th>
                <th>Comments <FontAwesomeIcon icon={faComment} /></th>
                <th>Posts</th>
            </tr>
            <tr>
                <td>{numLikes}</td>
                <td>{numComments}</td>
                <td>{numPosts}</td>
            </tr>
        </table>
    )
}