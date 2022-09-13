import { useContext } from 'react'; 
import { CommentContext } from '../../context/CommentProvider'; 

export default function CommentDeleteModal(props) {
    const {
        handleDeleteComment,
        deleteCommentId,
        setDeleteCommentId
    } = useContext(CommentContext); 
    return (
        <div
            className="modal"
            onClick={() => setDeleteCommentId("")}
            style={{
                "visibility": deleteCommentId ? "visible" : "hidden", 
                "opacity": deleteCommentId ? "1" : "0",
                "transition": "all 0.4s ease"
            }}

        >
            <div className="modal-content">
                <div className="modal-header">
                    <h2>Delete Post?</h2>
                </div>
                <div className="modal-body">
                    <p>Are you sure you want to delete this comment?</p>
                </div>
                <div className="modal-footer">
                    <button className="btn btn-primary" type="button" onClick={handleDeleteComment}>Yes, delete it</button>
                    <button className="btn btn-secondary" type="button" onClick={() => setDeleteCommentId('')}>No, keep it</button>
                </div>
            </div>
        </div>
    );
}