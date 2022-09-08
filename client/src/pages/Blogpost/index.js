import Layout from '../../containers/Layout'; 
import Content from '../../containers/Content'; 
import BlogInfo from './BlogInfo'; 
import Comments from './Comments'; 
import { useQuery } from '@apollo/client';
import { GET_POST } from '../../queries/postQuery';
import { useParams } from 'react-router-dom';
import Spinner from '../../components/Spinner';
export default function BlogPost() {
    // Blog post id 
    const { id } = useParams();

    const { loading, data, error } = useQuery(GET_POST, {
        variables: {
            id
        }
    })

    if (loading) { return <Spinner />; }

    return (
        <Layout>
            <Content>
                {error ? <p style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: "1.125em",
                    minHeight: "calc(100vh - 2*56px - 2*0.8em)"
                }}>No post with id of {id} exists</p>
                    :
                    <>
                        <BlogInfo {...data.post } />
                        <Comments />
                    </>
                }
            </Content>
        </Layout>
    )
}