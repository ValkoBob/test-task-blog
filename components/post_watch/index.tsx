import React, {FC, useEffect, useState} from "react";
import {Input_post, Textarea_post} from "../post/styles";
import {Button_post_page, Comments_part, Post_page} from "./styles";
import PostComments from "../post_comments";
import {IPostWatch} from "../../interfaces/IPostWatch";

const PostWatch: FC<IPostWatch> = ({post, updatePosts, createComment}) => {
    const {id, title, body} = post;
    const [isDisabled, setIsDisabled] = useState(true);
    const [isTitle, setTitle] = useState(title)
    const [isBody, setBody] = useState(body)
    const [isEdit, setEdit] = useState(true)
    useEffect(() => {
        setTitle(title)
        setBody(body)
    }, [title, body])
    const editPost = () => {
        if (!isEdit) {
            handleSubmit()
        } else {
            setIsDisabled(!isDisabled)
        }
        setEdit(!isEdit)
    }
    const handleChangeTitle = (e: { target: HTMLInputElement; }) => {
        setTitle(e.target.value)
    }

    const handleChangeBody = (e: { target: HTMLTextAreaElement; }) => {
        setBody(e.target.value)
    }

    if (!(id && isTitle && isBody && title && body)) {
        return null;
    }

    const handleSubmit = () => {
        if (isBody.length > 0 && isTitle.length > 0) {
            updatePosts(id, {title: isTitle, body: isBody})
        } else if (isBody.length > 0 && isTitle.length === 0) {
            updatePosts(id, {title: isTitle, body})
            setTitle(title);
        } else if (isBody.length === 0 && isTitle.length > 0) {
            updatePosts(id, {title: isTitle, body})
            setBody(body);
        } else {
            setTitle(title);
            setBody(body);
        }
        setIsDisabled(!isDisabled)
    }
    return (
        <Post_page>
            {isEdit ?
                <Button_post_page
                    onClick={editPost}
                    // @ts-ignore
                    isEdit={isEdit}
                >Edit</Button_post_page>
                :
                <Button_post_page
                    onClick={editPost}
                    // @ts-ignore
                    isEdit={isEdit}
                >Submit</Button_post_page>
            }
            <Input_post
                onChange={handleChangeTitle}
                type="text"
                value={isTitle}
                readOnly={isDisabled}
                // @ts-ignore
                isEdit={isEdit}
            />
            <Textarea_post
                onChange={handleChangeBody}
                value={isBody}
                readOnly={isDisabled}
                // @ts-ignore
                isEdit={isEdit}
            />
            <hr/>
            <Comments_part>
                <PostComments
                    post={post}
                    createComment={createComment}
                />
            </Comments_part>
        </Post_page>
    )
}


export default PostWatch;
