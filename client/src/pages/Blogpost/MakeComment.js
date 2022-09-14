import { CommentContext } from '../../context/CommentProvider'; 
import { useContext } from 'react'; 

export default function MakeComment({photoUrl}) {
    const {
        handleComment,
        comment, 
        setComment
    } = useContext(CommentContext);
    return (
        <form id="make-comment" onSubmit={handleComment}>
            <div className="profile-div">
                <img
                    src={photoUrl}
                    className="profile-pic"
                />
            </div>
            <div className="field">
                <input
                    type="text"
                    placeholder="Write a comment"
                    value={comment}
                    onChange={e => setComment(e.target.value)}
                />
            </div>
            <button id="submit" type="submit" disabled={comment === ""}>Post</button>
        </form>
    )
}