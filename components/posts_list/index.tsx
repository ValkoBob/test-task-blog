import * as React from "react";
import {FC} from "react";
import Post from "../post";

const PostsList: FC<any> = ({posts}) => {
    return (
        <>
            {
                posts.map((post: any) => (
                    <Post key={post.id} post={post}/>
                ))
            }
        </>
    )
}

export default PostsList
