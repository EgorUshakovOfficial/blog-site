import Layout from '../../containers/Layout'; 
import Content from '../../containers/Content'; 
import AllPosts from '../../components/AllPosts'; 
export default function Home() {
    return (
        <Layout>
            <Content>
                <AllPosts />
            </Content>
        </Layout>
    )
}