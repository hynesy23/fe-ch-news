export const getUsernamesFromUsers = arr => {
  if (!arr.length) return arr;

  const usernames = [];

  arr.forEach(user => {
    usernames.push(user.username);
  });

  return usernames;
};
