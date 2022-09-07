import usePost from '../../hooks/usePost'; 
import { useMutation } from '@apollo/client'; 
export default function PostForm() {
    const {
        title, 
        setTitle, 
        setImage,
        post,
        setDescription,
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
                    required
                />
            </div>
            <div className="field">
                <label for="blog-pic">Upload photo</label>
                <input
                    type="file"
                    id="blog-pic"
                    accept="image/*"
                    onChange={e => setImage(e.target.files[0])}
                    required
                />
            </div>
            <div className="field">
                <label for="post-description">Post</label>
                <textarea
                    type="text"
                    id="post-description"
                    value={post}
                    onChange={e => setDescription(e.target.value)}
                    placeholder="What's on your mind, user?"
                    required
                />
            </div>
            <button type="submit" id="submit">Create Post</button>
        </form>
    )
}