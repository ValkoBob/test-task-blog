import {IPost} from "./IPost";

export interface IPostComments {
    post: IPost,
    createComment:(id: number, body: string) => void
}
