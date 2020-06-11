import React, {FC, useState} from 'react';
import {connect} from "react-redux";
import * as actions from "../../redux/actions";
import {Button_Creator, Form, Input_Creator, Post_Creator, Reply} from "./styles";

const PostCreator: FC<any> = ({createPost}) => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [visible, setVisible] = useState(false);
    const addPost = () => {
        if (title && body) {
            createPost({title, body})
            setTitle('');
            setBody('');
            setVisible(true);
        }
    }
    if (visible) {
        return (
            <>
                <Reply>Post is created!</Reply>
                <Button_Creator onClick={() => setVisible(false)}>Create another post</Button_Creator>
            </>
        )
    }
    return (
        <>
            <Post_Creator>
                <Form>
                    <Input_Creator value={title}
                                   onChange={(event) => setTitle(event.target.value)}
                                   placeholder="Enter post title"/>
                    <Input_Creator value={body}
                                   onChange={(event) => setBody(event.target.value)}
                                   placeholder="Enter post text"/>
                    <Button_Creator
                        onClick={addPost}
                    >Submit</Button_Creator>
                </Form>
            </Post_Creator>
        </>
    )
}

const mapStateToProps = (state: any) => {
    const {posts} = state.posts
    return {
        posts
    };
};

export default connect(mapStateToProps, actions)(PostCreator);
