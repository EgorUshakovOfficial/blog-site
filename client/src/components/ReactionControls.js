import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faThumbsUp, 
    faComment
} from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react'; 
import { UserContext } from '../context/UserProvider'; 
import { useMutation } from '@apollo/client';
import { LIKE_POST } from '../mutations/likeMutation'; 
import { GET_USER } from '../queries/userQuery'; 

export default function ReactionControls({ postId }) {
    const {likes} = useContext(UserContext); 
    const [likePost] = useMutation(LIKE_POST, {
        variables: {
            postId
        }, 
        update(cache, { data }) {
            // Previous cache of user and all posts
            const { user } = cache.readQuery({ query: GET_USER })
            const newLike = data.likePost.likes.filter(like => like.userId === user._id)[0]; 
            let newUserLikes = user.likes.filter(like => like.postId !== postId)

            if (newLike) {
                newUserLikes = [...newUserLikes, newLike]
            }

            // Update cache of user's likes 
            cache.modify({
                id: cache.identify(user),
                fields: {
                    likes(prevLikes) {
                        return newUserLikes
                    }
                }
            })


        }
    }); 

    return (
        <div className="reactions-controls">
            <button className="reaction-button" onClick={() => likePost(postId)} style={{ color: likes.filter(obj => obj.postId === postId).length ? "blue" : "black" }}>
                Like <FontAwesomeIcon icon={faThumbsUp} />
            </button>
            <Link to="#" className="reaction-link">
                Comment <FontAwesomeIcon icon={faComment} />
            </Link>
            <Link to={`/post/${postId}`} className="reaction-link">
                Read more
            </Link>
        </div>
    )
}