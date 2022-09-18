import { useState } from 'react';
import { useMutation, useApolloClient} from '@apollo/client'; 
import { CREATE_POST, EDIT_POST, DELETE_POST} from '../mutations/postMutation'; 
import { GET_USER } from '../queries/userQuery';
import { GET_POSTS } from '../queries/postsQuery';

export default function usePost() {
    // Apollo client instance 
    const client = useApolloClient(); 

    // Post states
    const [title, setTitle] = useState('')
    const [image, setImage] = useState(null)
    const [description, setDescription] = useState('')
    const [editedTitle, setEditedTitle] = useState('')
    const [editedImage, setEditedImage] = useState(null)
    const [editedDescription, setEditedDescription] = useState('')
    const [postOptionsId, setPostOptionsId] = useState('')
    const [editPostId, setEditPostId] = useState('')
    const [deletePostId, setDeletePostId] = useState('')

    // Create post mutation
    const [createPost] = useMutation(CREATE_POST, {
        variables: {
            title, 
            description, 
            file: image
        },
        context: {
            headers: {
                "apollo-require-preflight": true
            }
        },
        refetchQueries: [GET_USER, GET_POSTS]
    })

    // Edit post mutatiion 
    const [editPost] = useMutation(EDIT_POST, {
        variables: {
            postId: editPostId, 
            title: editedTitle, 
            file: editedImage, 
            description: editedDescription
        }, 
        context: {
            headers: {
                "apollo-require-preflight": true
            }
        }
    })

    // Delete post mutation 
    const [deletePost] = useMutation(DELETE_POST, {
        variables: { postId: deletePostId }, 
        //update(cache, { data }) {
        //    //// Previous cache of posts 
        //    //const { posts } = cache.readQuery({ query: GET_POSTS }); 

        //    //// Update cache for posts 
        //    //cache.writeQuery({
        //    //    query: GET_POSTS, 
        //    //    data: {posts: posts.filter(post => post._id !== data.deletePost._id)}
        //    //})
        //},
        onCompleted: () => {
            client.refetchQueries({ include: [GET_USER, GET_POSTS] })
        }
        //onCompleted: data => {
        //    // Previous cache of user 
        //    let { user } = client.readQuery({ query: GET_USER })
        //    user = { ...user }

        //    user.posts = user.posts.filter(post => post._id !== data.deletePost._id)

        //    client.writeQuery({
        //        query: GET_USER,
        //        data: { user: { ...user } }
        //    })

        //}
    })

    const onSubmit = e => {
        // Prevent form from being submitted to the server 
        e.preventDefault()

        // Create new post 
        createPost(title, description, image)

        // Clear fields 
        setTitle('');
        setImage(null);
        setDescription('');
    }


    const handleEditPost = () => {
        // Edit post in the database 
        editPost(editPostId, editedTitle, editedImage, editedDescription) 

        // Clear all fields 
        setEditedTitle('')
        setEditedImage(null)
        setEditedDescription('')
        setEditPostId('')
        setPostOptionsId('')
    }

    const handleDeletePost = () => {
        // Delete post in the database 
        deletePost(deletePostId)

        // Clear post options id and delete post id 
        setDeletePostId('')
        setPostOptionsId('')

    }

    return {
        title, 
        setTitle, 
        setImage,
        description, 
        setDescription, 
        editedTitle, 
        setEditedTitle, 
        setEditedImage, 
        editedDescription, 
        setEditedDescription,
        postOptionsId,
        setPostOptionsId,
        editPostId,
        setEditPostId, 
        deletePostId,
        setDeletePostId,
        onSubmit,
        handleDeletePost, 
        handleEditPost
    }
}