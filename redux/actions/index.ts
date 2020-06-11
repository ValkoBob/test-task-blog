import API from "../../api";
import {GET_COMMENTS, GET_POSTS, UPDATE_POSTS} from "../constants";

export const getPosts = () => {
    return async (dispatch: (arg0: { type: string; payload: any; }) => void) => {
        try {
            const response = await API({
                method: "get", url: `/posts`,
            })
            dispatch({
                type: GET_POSTS,
                payload: response.data
            });
        } catch (error) {
            console.log(error)
            throw(error);
        }
    };
}

export const updatePosts = (id: number, data: {title: string, body: string}) => {
    return async (dispatch: (arg0: { type: string }) => void) => {
        try {
            await API({
                method: "put", url: `/posts/${id}`, data
            })
            dispatch({
                type: UPDATE_POSTS
            });
        } catch (error) {
            console.log(error)
            throw(error);
        }
    };
}

export const  deletePost = (id: number) => {
    return async (dispatch: (arg0: { type: string }) => void) => {
        try {
            await API({
                method: "delete", url: `/posts/${id}`
            })
            dispatch({
                type: UPDATE_POSTS
            });
        } catch (error) {
            console.log(error)
            throw(error);
        }
    };
}

export const createPost = (data: {title: string, body: string}) => {
    return async (dispatch: (arg0: { type: string }) => void) => {
        try {
            await API({
                method: "post", url: `/posts`, data
            })
            dispatch({
                type: UPDATE_POSTS
            });
        } catch (error) {
            console.log(error)
            throw(error);
        }
    };
}

export const getComments = (postId: number) => {
    return async (dispatch: (arg0: { type: string; payload: any; }) => void) => {
        try {
            const response = await API({
                method: "get", url: `posts/${postId}?_embed=comments`,
            })
            dispatch({
                type: GET_COMMENTS,
                payload: response.data
            });
        } catch (error) {
            console.log(error)
            throw(error);
        }
    };
}

export const createComment = (postId: number, body: string) => {
    return async (dispatch: (arg0: { type: string }) => void) => {
        try {
             await API({
                method: "post", url: `/comments`, data: {postId, body}
            })
            dispatch({
                type: UPDATE_POSTS,
            });
        } catch (error) {
            console.log(error)
            throw(error);
        }
    };
}
