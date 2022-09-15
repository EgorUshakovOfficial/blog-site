import { createContext } from 'react';
import usePost from '../hooks/usePost'; 
import PostEditModal from '../pages/Dashboard/PostEditModal'; 
import PostDeleteModal from '../pages/Dashboard/PostDeleteModal';


// Post context 
const PostContext = createContext({}); 

// Post provider 
const PostProvider = ({ children }) => {
    const postProps = usePost(); 

    return (
        <PostContext.Provider value={{ ...postProps }}>
            <PostEditModal />
            <PostDeleteModal />
            {children}
        </PostContext.Provider>
    )
}

export { PostContext, PostProvider }; 