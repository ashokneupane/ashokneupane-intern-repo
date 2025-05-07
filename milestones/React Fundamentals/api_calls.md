# Making API Calls with Axios #14

## how Axios works and why it's commonly used for API calls.

When we want to call an API in a JavaScript or React application, we use Axios, a promise-based HTTP client. Axios can make requests through the browser or Node.js, and it returns a response. Both the request and the response can be intercepted, transformed, or modified.

1. The syntax of Axios is simple, easy to read, and easy to understand.
2. It provides interceptors, allowing requests and responses to be modified before being sent or after being received.
3. It automatically parses JSON responses and stringifies request payloads.
4. It works well with older browsers.
5. It is easy to configure timeouts and cancel requests using CancelToken.

## Why is it useful to create a reusable Axios instance?
1. It eliminates the code repetitions.<br>

without an instance:
```
axios.get('https://api.example.com/users', {
  headers: { Authorization: 'Bearer your_token' }
});
axios.get('https://api.example.com/products', {
  headers: { Authorization: 'Bearer your_token' }
});
```
with an instance:
```
api.get('/users');
api.get('/products');
```

2. It allows to use interceptors to handle errors globally instead of handling the errors on each request.
```
api.interceptors.response.use(
  response => response,
  error => {
    if (error.response.status === 401) {
      console.error('Unauthorized! Redirecting to login...');
    }
    return Promise.reject(error);
  }
);
```
3. Defining `timeout`, `Content-Type`, and other settings in one place using an Axios instance.
4. It is easier to switch API endpoints for testing or mocking without changing multiple files.

## How does intercepting requests help with authentication?
It automatically attach authentication tokens(such as JWT) to every outgoing API request without manually adding them each time on each request. This is done using **Axios request interceptor**
```
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
  ```
  
## What happens if an API request times out, and how can you handle it?
When an API request times out, it means the server took too long to respond (beyond the time specified in your request config, e.g., timeout: 5000 for 5 seconds). Axios will automatically reject the request with a timeout error.

Example of timeout:
```
const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  timeout: 5000,
});
```

If a timeout happens, Axios throws an error object like:
```
{
  code: 'ECONNABORTED',
  message: 'timeout of 5000ms exceeded',
  ...
}
```
We can catch that error through `catch` block or an Axios response interceptor.
```
api.get('/https://jsonplaceholder.typicode.com')
  .then(res => console.log(res.data))
  .catch(err => {
    if (err.code === 'ECONNABORTED') {
      console.error('Request timed out. Please try again.');
    } else {
      console.error('Request failed:', err.message);
    }
  });
  ```

  Also, we can used `AbortController` as:
  ```
   useEffect(() => {
    const controller = new AbortController(); // create a new controller
    api.post('/posts',postData, { signal: controller.signal })
      .then(res => setData(res.data))
      .catch(err => setError(err.message));
       // 🧹 Clean up: cancel the request if component unmounts
    return () => {
        controller.abort();
        setError('Request was cancelled due to component unmount'); // Set error on unmount
      };
  }, []);
```