import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import {
    faThumbsUp,
    faComment
} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'; 
export default function Reactions() {
    return (
        <>
            <div className="reactions-results">
                <div className="num-likes">
                    <FontAwesomeIcon icon={faThumbsUp} /> 10
                </div>
                <div className="num-comments">
                    10 Comments
                </div>
            </div>
            <div className="reactions">
                <button className="reaction-button">
                    Like <FontAwesomeIcon icon={faThumbsUp} />
                </button>
                <Link to="#" className="reaction-link">
                    Comment <FontAwesomeIcon icon={faComment} />
                </Link>
                <Link to="#" className="reaction-link">
                    Read more
                </Link>
            </div>
        </>
    )
}