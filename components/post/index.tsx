import * as React from "react";
import {FC, useState} from "react";
import {
    One_Post,
    Buttons,
    Button_Edit,
    Button_Delete,
    Button_Visit,
    Input_post,
    Textarea_post
} from "./styles";
import {connect} from "react-redux";
import * as actions from "../../redux/actions";
import Link from "next/link";
import {IPostComponent} from "../../interfaces/IPostComponent";

const Post: FC<IPostComponent> = ({post, updatePosts, deletePost}) => {
    const {id, title, body} = post;
    const [isDisabled, setIsDisabled] = useState(true);
    const [isTitle, setTitle] = useState(title)
    const [isBody, setBody] = useState(body)
    const [isEdit, setEdit] = useState(true)
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

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        if (e.which === 13) {
            handleSubmit()
        }
    }
    if (!(id && isTitle && isBody && title && body)) {
        return null;
    }

    const handleSubmit = () => {
        if (isBody.length > 0 && isTitle.length > 0) {
            updatePosts(id, {title: isTitle, body: isBody})
        } else if (isBody.length > 0 && isTitle.length === 0) {
            updatePosts(id, {title, body: isBody})
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
        <One_Post>
            <Buttons>
                <Button_Edit onClick={editPost}>{isEdit ? "Edit" : "Submit"}</Button_Edit>
                <Button_Delete onClick={() => deletePost(id)}>Delete</Button_Delete>
            </Buttons>
            <Input_post
                onChange={handleChangeTitle}
                onKeyDown={handleKeyDown}
                type="text"
                value={isTitle}
                readOnly={isDisabled}
                // @ts-ignore
                isEdit={isEdit}
            />
            <Textarea_post
                onChange={handleChangeBody}
                onKeyDown={handleKeyDown}
                value={isBody}
                readOnly={isDisabled}
                // @ts-ignore
                isEdit={isEdit}
            />
            <Link href={`/posts/${id}`}>
                <Button_Visit>Watch post...</Button_Visit>
            </Link>
        </One_Post>
    )
}

const mapStateToProps = (state: any) => {
    const {posts} = state.posts
    return {
        posts
    };
};

export default connect(mapStateToProps, actions)(Post);
