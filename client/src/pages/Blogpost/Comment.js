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
            <p className="comment-description">
                {author.firstName} {author.lastName}: {comment}
            </p>
            {userId === author._id && <CommentOptions commentId={_id} />}
        </div>
    )
}