import MakeComment from './MakeComment';
import Comment from './Comment'; 
import Spinner from '../../components/Spinner'; 
import { useQuery} from '@apollo/client';
import { GET_COMMENTS } from '../../queries/commentsQuery';
import { useContext } from 'react';
import { UserContext } from '../../context/UserProvider'; 

export default function Comments({ postId }) {
    const { photoUrl } = useContext(UserContext); 

    const { data, loading} = useQuery(GET_COMMENTS, {
        variables: {
            postId
        }
    }); 

    return (
        <section id="comments">
            <MakeComment postId={postId} photoUrl={photoUrl} />
            {(!loading && data.comments.length === 0) && <p style={{fontSize:"1.125em", textAlign:"center"}}>No Comments available for this post</p>}
            {(!loading && data) ?  
                data.comments.map(obj => {
                    return <Comment key={obj._id} {...obj} />
                })
                :
                <Spinner />
            }
        </section>
    )
}