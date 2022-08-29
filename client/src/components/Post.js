import Reactions from '../components/Reactions'; 
export default function Post({
    postTitle,
    img, 
    postSnippet,
    numLikes, 
    numComments
}) {
    return (
        <div className="post">
            <h3 className="post-title">{postTitle}</h3>
            <div className="blog-pic-div">
                <img src={img} className="blog-pic" />
            </div>
            <p className="post-snippet">{postSnippet}</p>
            <Reactions />
        </div>
    )
}