import axios from "axios";

const baseURL = "https://cillians-server.herokuapp.com/api";

export const fetchAllArticles = (topic, sort_by, author) => {
  return axios
    .get(`${baseURL}/articles`, {
      params: { topic: topic, sort_by: sort_by, author: author }
    })
    .then(({ data }) => {
      return data.articles;
    });
};

export const fetchArticleById = article_id => {
  return axios
    .get(`${baseURL}/articles/${article_id}`)
    .then(({ data }) => data.article);
};

export const fetchAllTopics = () => {
  return axios.get(`${baseURL}/topics`).then(({ data }) => {
    return data.topics;
  });
};

export const fecthAllUsers = () => {
  return axios.get(`${baseURL}/users`).then(({ data }) => {
    return data.users;
  });
};

export const fetchSingleUser = username => {
  return axios.get(`${baseURL}/users/${username}`).then(({ data }) => {
    return data.user;
  });
};

export const fetchCommentsByArticleId = (article_id, sort_by) => {
  return axios
    .get(`${baseURL}/articles/${article_id}/comments`, {
      params: { sort_by: sort_by }
    })
    .then(({ data }) => data.comments);
};

export const insertComment = (comment, article_id) => {
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

export const insertNewUser = newUser => {
  // console.log(newUser, "new user api log");
  return axios.post(`${baseURL}/users`, newUser).then(({ data }) => {
    console.log(data.user);
  });
};

export const insertArticle = article => {
  return axios.post(`${baseURL}/articles`, article);
};
