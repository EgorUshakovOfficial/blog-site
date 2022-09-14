import CommentOptions from './CommentOptions'; 

export default function Comment({ _id, comment, photoUrl}) {
    return (
        <div className="comment">
            <div className="profile-div">
                <img
                    src={photoUrl}
                    className="profile-pic"
                />
            </div>
            <p className="comment-description">
                {comment}
            </p>
            <CommentOptions commentId={_id} />
        </div>
    )
}