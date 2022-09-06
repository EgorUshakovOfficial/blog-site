import Posts from '../../components/Posts';
export default function UserPosts({posts}) {
    return (
        <section id="user-posts">
            <h1 className="title">Your Posts</h1>
            <Posts posts={posts} />
        </section>
    )
}