import { createContext, useState } from 'react';
import CommentDeleteModal from '../pages/Blogpost/CommentDeleteModal';
import CommentEditModal from '../pages/Blogpost/CommentEditModal'; 
import useComment from '../hooks/useComment'; 

// Comment Context 
const CommentContext = createContext({}); 

const CommentProvider = ({ children, postId}) => {
    const commentProps = useComment(postId)

    return (
        <CommentContext.Provider value={{ ...commentProps, postId }}>
            < CommentDeleteModal /> 
            <CommentEditModal />
            {children}
        </CommentContext.Provider>
    )
}

export { CommentContext, CommentProvider }; 