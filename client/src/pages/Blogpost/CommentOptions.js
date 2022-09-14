import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faTrash,
    faPen
} from '@fortawesome/free-solid-svg-icons'; 
import { useContext } from 'react'; 
import { CommentContext } from '../../context/CommentProvider';
export default function CommentOptions({commentId}) {
    const { setEditCommentId, setDeleteCommentId} = useContext(CommentContext); 
    return (
        <div className="comment-options">
            <button className="btn btn-secondary" style={{ marginRight: "0.25em" }} onClick={() => setEditCommentId(commentId)}>
                <FontAwesomeIcon icon={faPen} />
            </button>
            <button className="btn btn-danger" onClick={() => setDeleteCommentId(commentId)}>
                <FontAwesomeIcon icon={faTrash} />
            </button>
        </div>
    )
}