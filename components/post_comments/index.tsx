import React, {FC, useState} from "react";
import {Button_add_comment, Comment_container, Textarea_comment} from "./styles";
import {IPostComments} from "../../interfaces/IPostComments";
import {IComments} from "../../interfaces/IComments";

const PostComments: FC<IPostComments> = ({post, createComment}) => {
    const {id, comments} = post;
    const [comment, setComment] = useState('')
    const handleChange = (e: { target: HTMLTextAreaElement; }) => {
        setComment(e.target.value)
    }
    if (!id) {
        return null;
    }
    const addComment = () => {
        if (comment) {
            createComment(id, comment)
        }
        setComment('')
    }
    return (
        <>
            <Textarea_comment
                onChange={handleChange}
                value={comment}
                placeholder="Add your comment"
            />
            <Button_add_comment
                onClick={addComment}
            >Add comment</Button_add_comment>
            <h2>Comments</h2>
            {comments && comments.map((comment: IComments) => {
                return (
                    <Comment_container key={comment.id}>
                        <h4>Comment #{comment.id}</h4>
                        <p>{comment.body}</p>
                    </Comment_container>
                )
            })}
        </>
    )
}

export default PostComments
