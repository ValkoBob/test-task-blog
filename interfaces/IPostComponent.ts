import {IPost} from "./IPost";

export interface IPostComponent {
    post: IPost,
    updatePosts: (id: number, data: {title: string, body: string}) => void,
    deletePost: (id: number) => void
}
