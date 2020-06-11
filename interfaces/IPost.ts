import {IComments} from "./IComments";

export interface IPost {
    id?: number,
    title?: string,
    body?: string,
    comments?: IComments[]
}
