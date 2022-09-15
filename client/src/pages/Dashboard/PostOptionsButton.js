import { useContext } from 'react';
import { PostContext } from '../../context/PostProvider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';

export default function PostOptionsButton({postId}) {
    const { setPostOptionsId } = useContext(PostContext); 
    return (
        <>
            {setPostOptionsId &&
                <button
                    className="post-options-button"
                    onClick={() => setPostOptionsId(postId)}
                >
                    <FontAwesomeIcon icon={faEllipsis} />
                </button>
             }
        </>
    )
}