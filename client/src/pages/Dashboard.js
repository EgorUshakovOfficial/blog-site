import Header from '../components/Header'; 
import UserOptions from '../components/UserOptions';
import AllPosts from '../components/AllPosts';
import UserPosts from '../components/UserPosts';
import Footer from '../components/Footer';

// Import posts here...
export default function Dashboard() {
    return (
        <>
            <Header />
            <UserOptions />
            <UserPosts />
            <AllPosts />
            <Footer />
        </>
    )
}