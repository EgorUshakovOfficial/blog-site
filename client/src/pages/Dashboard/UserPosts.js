import Posts from '../../components/Posts';
import { useContext } from 'react'; 
import { UserContext } from '../../context/UserProvider'; 
export default function UserPosts() {
    const { posts } = useContext(UserContext);

    return (
        <section id="user-posts">
            <h1 className="title">Your Posts</h1>
            {posts.length === 0 ?
                <p style={{textAlign:"center", fontSize:"1.125em"}}>You have not created any posts.</p>
                :
                <Posts posts={posts} />
            }
        </section>
    )
}