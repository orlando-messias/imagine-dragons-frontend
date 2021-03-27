import axios from 'axios';

const api = axios.create({
  baseURL: `http://localhost:3001/user/login`
});

export default api;