import axios from "axios";

const baseURL = "https://cillians-server.herokuapp.com/api";

export const fetchAllArticles = async (topic, sort_by) => {
  return await axios
    .get(`${baseURL}/articles`, { params: { topic: topic, sort_by: sort_by } })
    .then(({ data }) => {
      return data.articles;
    });
};

export const fetchArticleById = async article_id => {
  console.log("Do i get this far");

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
  console.log(username, "do i go this far?");

  return await axios.get(`${baseURL}/users/${username}`).then(({ data }) => {
    return data.user;
  });
};
