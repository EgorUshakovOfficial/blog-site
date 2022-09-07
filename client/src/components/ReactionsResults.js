import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
export default function ReactionsResults({numLikes, numComments }) {
    return (
        <div className="reactions-results">
            <div className="num-likes">
                <FontAwesomeIcon icon={faThumbsUp} /> {numLikes}
            </div>
            <div className="num-comments">
                {numComments} Comments
            </div>
        </div>
    )
}