import { useContext } from 'react';
import { CommentContext } from '../../context/CommentProvider';
export default function CommentEditModal() {
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
                    <h2>Edit Post?</h2>
                </div>
                <div className="modal-body">
                    <div className="profile-div" style={{ display: "flex", justifyContent:"center" }}>
                        <img
                            src="https://scontent.fyyc8-1.fna.fbcdn.net/v/t1.6435-9/115821478_3118181974896443_7757001406663804394_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=5GFLHOs5in8AX-mXpbO&_nc_ht=scontent.fyyc8-1.fna&oh=00_AT85u-Bbgv12Kh_VIZwYBAINLGR6Tki3pXghD3N1f7kBWA&oe=6329F324"
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