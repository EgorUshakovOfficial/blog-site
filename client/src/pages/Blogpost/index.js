import Layout from '../../containers/Layout'; 
import Content from '../../containers/Content'; 
import BlogInfo from './BlogInfo'; 
import Comments from './Comments'; 
export default function BlogPost() {
    return (
        <Layout>
            <Content>
                <BlogInfo />
                <Comments />
            </Content>
        </Layout>
    )
}