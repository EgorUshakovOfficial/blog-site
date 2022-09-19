import { useContext } from 'react'; 
import { UserContext } from '../../context/UserProvider';
import CommentOptions from './CommentOptions'; 

export default function Comment({ _id, comment, author}){
    const { _id: userId } = useContext(UserContext)

    return (
        <div className="comment">
            <div className="profile-div">
                <img
                    src={author.photoUrl}
                    className="profile-pic"
                />
            </div>
            <p className="comment-name">
                {author.firstName} {author.lastName}
            </p>
            <p className="comment-description">
                {comment}
            </p>
            {userId === author._id && <CommentOptions commentId={_id} />}
        </div>
    )
}