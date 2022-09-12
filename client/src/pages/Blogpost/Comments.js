import MakeComment from './MakeComment';
import Comment from './Comment'; 
import Spinner from '../../components/Spinner'; 
import { useQuery} from '@apollo/client';
import { GET_COMMENTS } from '../../queries/commentsQuery';

export default function Comments({postId}) {
    const { data, loading} = useQuery(GET_COMMENTS, {
        variables: {
            postId
        }
    }); 

    return (
        <section id="comments">
            <MakeComment postId={postId} />
            {(!loading && data.comments.length === 0) && <p style={{fontSize:"1.125em", textAlign:"center"}}>No Comments available for this post</p>}
            {(!loading && data) ?  
                data.comments.map(obj => {
                    const { _id, comment } = obj; 
                    return <Comment key={_id} comment={comment} />
                })
                :
                <Spinner />
            }
        </section>
    )
}