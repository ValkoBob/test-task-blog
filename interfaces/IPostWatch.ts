import {IPost} from "./IPost";

export interface IPostWatch {
    post: IPost,
    createComment:(id: number, body: string) => void,
    updatePosts: (id: number, data: {title: string, body: string}) => void,
}
