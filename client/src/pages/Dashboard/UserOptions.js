import { useContext } from 'react';
import { UserContext } from '../../context/UserProvider';
import EditProfilePic from './EditProfilePic'; 
import PostForm from './PostForm'; 
import UserAnalytics from './UserAnalytics';
export default function UserOptions() {
    const { posts, likes, comments, photoUrl} = useContext(UserContext); 
    return (
        <section id="user-options">
            <div id="user-info">
                <div className="profile-div">
                    <img
                        src={photoUrl}
                        className="profile-pic"
                    />
                </div>
                <EditProfilePic />
                <h2 id="data-title">Data Analytics</h2>
                <UserAnalytics
                    numLikes={likes.length}
                    numComments={comments.length}
                    numPosts={posts.length}
                />
            </div>
            <PostForm />
        </section>
    )
}