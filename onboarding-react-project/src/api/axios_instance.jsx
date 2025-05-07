import axios from 'axios';

const baseURL = 'https://jsonplaceholder.typicode.com';
const timeout = 1000;

const api = axios.create({
  baseURL: baseURL,
  timeout: timeout,
  headers: {
    'Accept': '*/*'
}
});

// Add a request interceptor to log the request details
api.interceptors.request.use(request => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      request.headers['Authorization'] = `Bearer ${accessToken}`;
    }
    return request;
  }, error => {
    return Promise.reject(error);
  });

export default api;