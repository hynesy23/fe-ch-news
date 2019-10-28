import axios from "axios";

const baseURL = "https://cillians-server.herokuapp.com/api";

export const fetchAllArticles = async (author, topic, sort_by) => {
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

export const fetchCommentsByArticleId = async article_id => {
  return await axios
    .get(`${baseURL}/articles/${article_id}/comments`)
    .then(({ data }) => data.comments);
};