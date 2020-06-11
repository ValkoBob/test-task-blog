import {GET_COMMENTS, GET_POSTS, UPDATE_POSTS} from "../constants";
import {IState} from "../../interfaces/IState";

const INITIAL_STATE: IState = {
    posts: [],
    data: {},
    update: true,
}

export const posts = (state = INITIAL_STATE, action: any) => {
    switch (action.type) {
        case GET_POSTS:
            return {
                ...state,
                posts: action.payload
            }
        case GET_COMMENTS:
            return {
                ...state,
                data: action.payload
            }
        case UPDATE_POSTS:
            return {
                ... state,
                update: !state.update
            }
        default:
            return state

    }
}
