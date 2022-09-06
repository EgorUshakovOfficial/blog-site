import { useContext } from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route, 
    Navigate
} from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import Private from '../containers/Private'; 
import Home from '../pages/Home/index';
import DashBoard from '../pages/Dashboard/index';
import SignUp from '../pages/Register/index';
import SignIn from '../pages/Login/index';
import BlogPost from '../pages/Blogpost/index';
import { AuthContext } from '../context/AuthProvider';
import { UserProvider } from '../context/UserProvider'; 
import { getClient } from '../utils/getClient';

export default function Presentational() {
    const { token } = useContext(AuthContext);

    return (
        <>
            {token === null ? 
                <p>Loading...</p>
                :
                <ApolloProvider client={getClient(token)}>
                    <Router>
                        <Routes>
                            {token === "" && <Route path="/" element={<Home />} exact />}
                            <Route element={<Private />}>
                                <Route path="/" element={<DashBoard />} exact />
                                <Route path="/post/:id" element={<BlogPost />} />
                            </Route>
                            <Route path="/register" element={<>{token === "" ? <SignUp /> : <Navigate to="/" />}</>} />
                            <Route path="/login" element={<>{token === "" ? <SignIn /> : <Navigate to="/" />}</>} />
                        </Routes>
                    </Router>
                </ApolloProvider>
            }
        </>
    )
}