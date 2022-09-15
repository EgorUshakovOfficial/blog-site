import Reactions from '../components/Reactions';
import PostOptions from '../pages/Dashboard/PostOptions';
import PostOptionsButton from '../pages/Dashboard/PostOptionsButton';


export default function Post({
    id,
    postTitle,
    img, 
    postSnippet,
    numLikes, 
    numComments
}) {
    return (
        <div className="post">
            <div className="post-header">
                <h3 className="post-title">{postTitle}</h3>
                <PostOptionsButton postId={id} />
                <PostOptions postId={id}/>
            </div>
            <div className="blog-pic-div">
                <img src={img} className="blog-pic" />
            </div>
            <p className="post-snippet">
                {postSnippet}
            </p>
            <Reactions numLikes={numLikes} numComments={numComments} postId={id} />
        </div>
    )
}