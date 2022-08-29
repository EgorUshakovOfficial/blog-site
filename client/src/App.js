import './styles/globals.css';
import {
    BrowserRouter as Router, 
    Routes, 
    Route
} from 'react-router-dom'; 
import Home from './pages/Home';
import DashBoard from './pages/Dashboard'; 
import SignUp from './pages/SignUp'; 
import SignIn from './pages/SignIn'; 
import BlogPost from './pages/BlogPost';
export default function  App() {
  return (
      <Router>
          <Routes>
              <Route path="/" element={<Home /> } />
              <Route path="/dashboard" element={<DashBoard />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/sign-in" element={<SignIn />} />
              <Route path="/post/:id" element={<BlogPost />} />
          </Routes>
      </Router>
  );
}