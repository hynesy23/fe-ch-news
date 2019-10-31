import axios from "axios";

const baseURL = "https://cillians-server.herokuapp.com/api";

export const fetchAllArticles = async (topic, sort_by, author) => {
  return await axios
    .get(`${baseURL}/articles`, {
      params: { topic: topic, sort_by: sort_by, author: author }
    })
    .then(({ data }) => {
      return data.articles;
    });
};

export const fetchArticleById = async article_id => {
  return await axios
    .get(`${baseURL}/articles/${article_id}`)
    .then(({ data }) => data.article);
};

export const fetchAllTopics = async () => {
  return await axios.get(`${baseURL}/topics`).then(({ data }) => {
    return data.topics;
  });
};

export const fecthAllUsers = async () => {
  return await axios.get(`${baseURL}/users`).then(({ data }) => {
    return data.users;
  });
};

export const fetchSingleUser = async username => {
  return await axios.get(`${baseURL}/users/${username}`).then(({ data }) => {
    return data.user;
  });
};

export const fetchCommentsByArticleId = async (article_id, sort_by) => {
  return await axios
    .get(`${baseURL}/articles/${article_id}/comments`, {
      params: { sort_by: sort_by }
    })
    .then(({ data }) => data.comments);
};

export const insertComment = (comment, article_id) => {
  console.log(comment, "comment from api");
  return axios
    .post(`${baseURL}/articles/${article_id}/comments`, comment)
    .then(({ data }) => {
      return data.comment;
    });
};

export const voteChange = (id, numOfVotes, marker) => {
  return axios.patch(`${baseURL}/${marker}/${id}`, { inc_votes: numOfVotes });
};

export const removeComment = comment_id => {
  return axios.delete(`${baseURL}/comments/${comment_id}`);
};
