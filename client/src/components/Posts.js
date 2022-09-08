import Post from '../components/Post';

export default function Posts({ posts }) {
    return (
        <div className="posts">
            {
                posts.map(post => {
                    const {
                        _id,
                        title,
                        description,
                        photoUrl,
                        likes,
                        comments
                    } = post; 
                    return (
                        <Post
                            key={_id}
                            postTitle={title}
                            img={photoUrl}
                            postSnippet={description}
                            numLikes={likes?.length}
                            numComments={comments?.length}
                            id={_id}
                        />
                    )
                })
            }
        </div>
    )
}