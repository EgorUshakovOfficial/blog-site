import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faTrash,
    faPen
} from '@fortawesome/free-solid-svg-icons'; 
import { useContext } from 'react'; 
import { CommentContext } from '../../context/CommentProvider';
import Button from 'react-bootstrap/Button'; 
export default function CommentOptions({commentId}) {
    const { setEditCommentId, setDeleteCommentId} = useContext(CommentContext); 
    return (
        <div className="comment-options">
            <Button variant="secondary" style={{ marginRight: "0.25em" }} onClick={() => setEditCommentId(commentId)}>
                <FontAwesomeIcon icon={faPen} />
            </Button>
            <Button variant="danger" onClick={() => setDeleteCommentId(commentId)}>
                <FontAwesomeIcon icon={faTrash} />
            </Button>
        </div>
    )
}