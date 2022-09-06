import Layout from '../../containers/Layout'; 
import Content from '../../containers/Content'; 
import Login from './Login';
export default function SignIn() {
    return (
        <Layout>
            <Content>
                <Login />
            </Content>
        </Layout>
    )
}