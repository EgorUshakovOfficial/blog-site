import { useContext } from 'react';
import { PostContext } from '../../context/PostProvider';

export default function PostEditModal() {
    const {
        editPostId,
        setEditPostId, 
        editedTitle, 
        setEditedTitle, 
        setEditedImage, 
        editedDescription,
        setEditedDescription, 
        handleEditPost
    } = useContext(PostContext); 
    return (
        <div
            className="modal"
            style={{
                "visibility": editPostId ? "visible" : "hidden",
                "opacity": editPostId ? "1" : "0",
                "transition": "all 0.4s ease"
            }}
        >
            <div className="modal-content">
                <div className="modal-header">
                    <h2>Edit Post?</h2>
                </div>
                <div className="modal-body">
                    <div className="profile-div" style={{ display: "flex", justifyContent: "center" }}>
                        <img
                            src="https://scontent.fyyc8-1.fna.fbcdn.net/v/t1.6435-9/115821478_3118181974896443_7757001406663804394_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=5GFLHOs5in8AX-mXpbO&_nc_ht=scontent.fyyc8-1.fna&oh=00_AT85u-Bbgv12Kh_VIZwYBAINLGR6Tki3pXghD3N1f7kBWA&oe=6329F324"
                            className="profile-pic"
                        />
                    </div>
                    <div className="field">
                        <label>Title</label>
                        <input
                            type="text"
                            placeholder="Edit title of post"
                            value={editedTitle}
                            onChange={e => setEditedTitle(e.target.value)}
                        />
                    </div>
                    <div className="field">
                        <label for="blog-pic">Upload photo</label>
                        <input
                            type="file"
                            id="blog-pic"
                            accept="image/*"
                            onChange={e => setEditedImage(e.target.files[0])}
                            required
                        />
                    </div>
                    <div className="field">
                        <label>Post</label>
                        <textarea
                            type="text"
                            placeholder="Edit your post"
                            value={editedDescription}
                            onChange={e => setEditedDescription(e.target.value)}
                        />
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-primary" onClick={handleEditPost}>Save changes</button>
                    <button type="button" className="btn btn-secondary" onClick={() => setEditPostId("")}>Cancel</button>
                </div>
            </div>
        </div>
    )
}