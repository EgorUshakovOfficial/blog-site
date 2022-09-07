import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faThumbsUp, 
    faComment
} from '@fortawesome/free-solid-svg-icons';
export default function ReactionControls() {
    return (
        <div className="reactions-controls">
            <button className="reaction-button">
                Like <FontAwesomeIcon icon={faThumbsUp} />
            </button>
            <Link to="#" className="reaction-link">
                Comment <FontAwesomeIcon icon={faComment} />
            </Link>
        </div>
    )
}