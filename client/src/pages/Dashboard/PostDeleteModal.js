import { useContext } from 'react';
import { PostContext } from '../../context/PostProvider';

export default function PostDeleteModal() {
    const { deletePostId, setDeletePostId } = useContext(PostContext); 
    return (
        <div
            className="modal"
            style={{
                "visibility": deletePostId ? "visible" : "hidden",
                "opacity": deletePostId ? "1" : "0",
                "transition": "all 0.4s ease"
            }}
        >
            <div className="modal-content">
                <div className="modal-header">
                    <h2>Delete post?</h2>
                </div>
                <div className="modal-body">
                    <p>Are you sure you want to delete this post?</p>
                </div>
                <div className="modal-footer">
                    <button className="btn btn-primary" type="button">Yes, delete it</button>
                    <button className="btn btn-secondary" type="button" onClick={() => setDeletePostId("")}>No, keep it</button>
                </div>
            </div>
        </div>
    );
}