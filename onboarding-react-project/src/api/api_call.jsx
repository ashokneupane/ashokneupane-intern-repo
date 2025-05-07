import React, { useEffect, useState } from 'react';
import api from './axios_instance'; // import your configured Axios instance

export default function ApiViewer() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const postData = {
    userId: 3084,
    title: "ashok title",
    body: "ashok body"
  };

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

  return (
    <div style={{ padding: '1rem', fontFamily: 'monospace' }}>
      <h2>API Response</h2>
      {/* {error && <pre style={{ color: 'red' }}>Error: {error}</pre>} */}
      {data ? (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
