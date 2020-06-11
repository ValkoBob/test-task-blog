import {connect} from "react-redux";
import * as actions from "../redux/actions/index";
import React, {FC, useEffect} from "react";
import Layout from "../components/layout";
import PostsList from "../components/posts_list";
import Spinner from "../components/spinner";
import {IIndex} from "../interfaces/IIndex";


const Index: FC<IIndex> = ({posts, update, getPosts}) => {
    useEffect(() => {
        getPosts()
    },[update])
    return (
        <Layout title="Blog">
            {posts ? <PostsList posts={posts}/> : <Spinner/>}
        </Layout>
    )

}

const mapStateToProps = (state: any) => {
    const {posts, update} = state.posts
    return {
        posts,
        update
    };
};

export default connect(mapStateToProps, actions)(Index);
