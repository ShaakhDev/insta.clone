import {createSlice} from "@reduxjs/toolkit";

const postReducer = createSlice({
    name: 'post',
    initialState: {
        posts: [],
        currentPost: {},
        loading: false,
        commentLoading: false,
        error: 0,
        postImagePath: null,
        statusNewPost: "",
    },
    reducers: {
        setPosts(state, action) {
            state.posts = action.payload.sort((a, b) => b.id - a.id);
            state.error = 0
        },
        loading(state, action) {
            state.loading = action.payload
        },
        setCurrentPost(state, action) {
            const post = action.payload;
            post.comments = post.comments.sort((a, b) => b.id - a.id)
            state.currentPost = post
            state.error = 0
        },
        setCurrentPostComment(state, action) {
            const newComment = action.payload;
            state.currentPost.comments.unshift(newComment);
        },
        setCommentLoading(state, action) {
            state.commentLoading = action.payload;
        },
        setError(state, action) {
            state.error = action.payload
        },
        setPostImagePath(state, action) {
            state.postImagePath = action.payload
            state.error = 0

        },

        setNewPost(state, action) {
            state.posts.unshift(action.payload);
            state.error = 0
        },
        editPost(state, action) {
            state.posts = state.posts.map(post => {
                if (action.payload.id === post.id) {
                    return {
                        ...post,
                        caption: action.payload.caption
                    }
                } else return post
            })
        },
        deletePost(state, action) {
            const id = action.payload
            state.posts = state.posts.filter(post => post.id !== id)
        },
        setStatus(state, action) {
            state.statusNewPost = action.payload

        },
        setLike(state, action) {
            state.posts = state.posts.map(post => {
                if (action.payload.id === post.id) {
                    return {
                        ...post,
                        likes: action.payload.likes
                    }
                } else return post

            })
            console.log('from reducer: ', state.posts)

        }

    }
})

export const postActions = postReducer.actions;
export default postReducer.reducer;