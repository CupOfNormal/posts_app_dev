import React, { Component } from 'react';

import { PostWrapper, Navigate, Post, Warning } from '../../components';

import * as services from '../../services/post';

class PostContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            postId: 1,
            pending: false,
            post: {
                title: null,
                body: null
            },
            comments: [],
            warning: false
        };
    }

    componentDidMount() {
        // const { fetchPost } = this;
        // fetchPost(1);
        this.fetchPost(1);
    }

    fetchPost = async (postId) => {
        this.setState({
            pending: true
        });
        try {
            const info = await Promise.all([
                services.getPost(postId),
                services.getComments(postId)
            ]);
            // console.log('[info/fetchPost]:\n', info);
            const { title, body } = info[0].data;
            const comments = info[1].data;
            this.setState({
                postId,
                pending: false,
                post: {
                    title,
                    body
                },
                comments,
            });
            // console.log('[state/fetchPost]:\n', this.state);
        }
        catch(error) {
            this.setState({
                pending: false
            });
            this.showWarning();
            // console.error('[error/fetchPost]:\n', error);            
        }
    }

    handleNavigateClick = (type) => {
        const postId = this.state.postId;
        if (type === 'NEXT') {
            this.fetchPost(postId + 1);
        }
        else {
            this.fetchPost(postId - 1);
        }
    }

    showWarning = () => {
        this.setState({
            warning: true
        });
        setTimeout(() => {
            this.setState({
                warning: false
            });
        }, 1500);
    }

    render() {
        const { postId, pending, post, comments, warning } = this.state;
        return (
            <PostWrapper>
                <Navigate
                    postId={postId}
                    disabled={pending}
                    onClick={this.handleNavigateClick}
                />
                <Post
                    postId={postId}
                    title={post.title}
                    body={post.body}
                    comments={comments}
                />
                <Warning
                    visible={warning}
                    message="That post does not exist"
                />
            </PostWrapper>
        );
    }
}

export default PostContainer;