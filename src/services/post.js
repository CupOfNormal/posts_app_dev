import axios from 'axios';

const serverPostsUrl = 'https://jsonplaceholder.typicode.com/posts'

const getPost = (postId) => {
    return axios.get(serverPostsUrl + '/' + postId);
};

const getComments = (postId) => {
    return axios.get(`${serverPostsUrl}/${postId}/comments`);
};

export {
    getPost,
    getComments,
};