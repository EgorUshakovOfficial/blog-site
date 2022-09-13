import Layout from '../../containers/Layout'; 
import Content from '../../containers/Content'; 
import UserOptions from './UserOptions'; 
import UserPosts from './UserPosts';
import AllPosts from '../../components/AllPosts';


export default function Dashboard() {
    return (
        <Layout>
            <Content>
                <UserOptions  />
                <UserPosts  />
                <AllPosts />
            </Content>
        </Layout>
    )
}