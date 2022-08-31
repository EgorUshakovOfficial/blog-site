import { useContext } from 'react';
import { AuthContext } from '../containers/AuthProvider';
import {
    BrowserRouter as Router,
    Routes,
    Route, 
    Navigate
} from 'react-router-dom';
import Private from '../containers/Private'; 
import Home from '../pages/Home';
import DashBoard from '../pages/Dashboard';
import SignUp from '../pages/SignUp';
import SignIn from '../pages/SignIn';
import BlogPost from '../pages/BlogPost';

export default function Presentational() {
    const { token } = useContext(AuthContext);

    return (
        <>
            {token === null ? 
                <p>Loading...</p>
                :
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
            }
        </>
    )
}