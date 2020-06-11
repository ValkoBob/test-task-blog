import {IPost} from "./IPost";

export interface IState {
    posts: IPost[],
    data: IPost,
    update: boolean
}
