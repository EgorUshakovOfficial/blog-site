import { useContext } from 'react';
import { PostContext } from '../../context/PostProvider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faTrash,
    faPen
} from '@fortawesome/free-solid-svg-icons';
export default function PostOptions({postId}) {
    const {
        postOptionsId,
        setPostOptionsId,
        setEditPostId,
        setDeletePostId,
    } = useContext(PostContext);
    return (
        <div
            className="post-options"
            style={{
                "visibility": (postOptionsId===postId) ? "visible" : "hidden",
                "opacity": (postOptionsId===postId) ? "1" : "0",
                "transition": "all 0.2s ease"
            }}
        >
            <span className="post-options-close btn" onClick={() => setPostOptionsId("")}>
                &times;
            </span>
            <button className="edit-post btn btn-secondary" onClick={() => setEditPostId(postId)}>
                <FontAwesomeIcon icon={faPen} />
            </button>
            <button className="delete-post btn btn-danger" onClick={() => setDeletePostId(postId)}>
                <FontAwesomeIcon icon={faTrash} />
            </button>
        </div>
    )
}