import { useContext } from 'react';
import { UserContext } from '../../context/UserProvider'; 
import { CommentContext } from '../../context/CommentProvider';

export default function CommentEditModal() {
    const { photoUrl } = useContext(UserContext)
    const {
        editCommentId,
        setEditCommentId,
        setEditedComment,
        editedComment, 
        handleEditComment
    } = useContext(CommentContext); 
    return (
        <div
            className="modal"
            onClick={() => setEditCommentId("")}
            style={{
                "visibility": editCommentId ? "visible" : "hidden",
                "opacity": editCommentId ? "1" : "0",
                "transition": "all 0.4s ease"
            }}
        >
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <div className="modal-header">
                    <h2>Edit comment?</h2>
                </div>
                <div className="modal-body">
                    <div className="profile-div" style={{ display: "flex", justifyContent:"center" }}>
                        <img
                            src={photoUrl}
                            className="profile-pic"
                        />
                    </div>
                    <div className="field">
                        <textarea
                            type="text"
                            placeholder="Edit your comment"
                            value={editedComment}
                            onChange={e => setEditedComment(e.target.value)}
                        />
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-primary" onClick={handleEditComment} disabled={editedComment === ""}>Save changes</button>
                    <button type="button" className="btn btn-secondary" onClick={() => setEditCommentId("")}>Cancel</button>
                </div>
            </div>
        </div>
    )
}