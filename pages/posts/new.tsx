import React from 'react';
import Layout from "../../components/layout";
import PostCreator from "../../components/post_creator";

const NewPost = () => {
    return (
        <Layout title={"New post"}>
            <PostCreator/>
        </Layout>
    )
}

export default NewPost;
