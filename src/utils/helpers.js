export const getUsernamesFromUsers = (arr, username) => {
  if (!arr.length) return arr;

 return arr.find(user => user.username === username)
};
