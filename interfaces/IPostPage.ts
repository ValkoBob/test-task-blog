import {IPost} from "./IPost";

export interface IPostPage {
    data: IPost,
    update: boolean,
    getComments: (postId: number) => void,
    updatePosts: (id: number, data: {title: string, body: string}) => void,
    createComment:(id: number, body: string) => void
}
