import {IPost} from "./IPost";

export interface IIndex {
    posts: IPost[],
    update: boolean,
    getPosts: () => void
}
