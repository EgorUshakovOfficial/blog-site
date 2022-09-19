import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom'; 
import { CommentProvider } from '../../context/CommentProvider';
import { GET_POST } from '../../queries/postQuery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import Layout from '../../containers/Layout'; 
import Content from '../../containers/Content'; 
import BlogInfo from './BlogInfo'; 
import Comments from './Comments'; 
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
                {(error || data.post === null) ? <p style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: "1.125em",
                    minHeight: "calc(100vh - 2*56px - 2*0.8em)"
                }}>No post with id of {id} exists
                    <br />
                    <Link to="/" style={{display:"block"}}>
                        Go back <FontAwesomeIcon icon={faArrowLeft} />
                    </Link>
                </p>
                    :
                    <>
                        <BlogInfo {...data.post} />
                        <CommentProvider postId={data.post._id}>
                            <Comments postId={data.post._id} />
                        </CommentProvider>
                    </>
                }
            </Content>
        </Layout>
    )
}