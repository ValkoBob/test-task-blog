import React, {FC, useEffect} from "react";
import Layout from "../../components/layout";
import PostWatch from "../../components/post_watch";
import {connect} from "react-redux";
import * as actions from "../../redux/actions";
import {useRouter} from "next/router";
import Spinner from "../../components/spinner";
import {IPostPage} from "../../interfaces/IPostPage";

const PostPage: FC<IPostPage> = ({data, update, getComments, updatePosts, createComment}) => {
    const postId = Number(useRouter().query.id);
    useEffect(() => {
        if(postId) {
            getComments(postId)
        }
    }, [postId, update])
    return (
        <Layout title={"Post"}>
            {data !== undefined ? <PostWatch
                post={data}
                updatePosts={updatePosts}
                createComment={createComment}
            /> : <Spinner/>}
        </Layout>
    )
}

const mapStateToProps = (state: any) => {
    const {data, update} = state.posts
    return {
        data,
        update,
    };
};

export default connect(mapStateToProps, actions)(PostPage);
