import usePost from '../../hooks/usePost'; 
export default function PostForm() {
    const {
        title, 
        setTitle, 
        setImage,
        post,
        setPostDescription,
        onSubmit 
    } = usePost()
    return (
        <form id="post-form" onSubmit={onSubmit}>
            <div className="field">
                <label for="title">Title</label>
                <input
                    type="text"
                    id="title"
                    value={title}
                    placeholder="Name of post"
                    onChange={e => setTitle(e.target.value)}
                />
            </div>
            <div className="field">
                <label for="blog-pic">Upload photo</label>
                <input
                    type="file"
                    id="blog-pic"
                    accept="image/*"
                    onChange={e => setImage(e.target.files[0]) }
                />
            </div>
            <div className="field">
                <label for="post-description">Post</label>
                <textarea
                    type="text"
                    id="post-description"
                    value={post}
                    onChange={e => setPostDescription(e.target.value)}
                    placeholder="What's on your mind, user?"
                />
            </div>
            <button type="submit" id="submit">Create Post</button>
        </form>
    )
}