import Layout from '../../containers/Layout'; 
import Content from '../../containers/Content'; 
import UserOptions from './UserOptions'; 
import UserPosts from './UserPosts';
import AllPosts from '../../components/AllPosts';
import { PostProvider } from '../../context/PostProvider'; 


export default function Dashboard() {
    return (
        <Layout>
            <Content>
                <PostProvider>
                    <UserOptions />
                    <UserPosts />
                </PostProvider>
                <AllPosts />
            </Content>
        </Layout>
    )
}