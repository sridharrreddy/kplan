import axios from 'axios';

function sleep(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}

async function GetUsers() {
  // taske 5 seconds
  await sleep(1000);
  const response = await axios.get(
    'https://jsonplaceholder.typicode.com/users'
  );
  return response.data;
}

export async function GetPostsByUser(userId) {
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${userId}/posts`
  );
  return response.data;
}

export async function GetUserTodos(userId, start, limit) {
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${userId}/todos?_start=${start}&_limit=${limit}`
  );
  return response.data;
}

export default GetUsers;
