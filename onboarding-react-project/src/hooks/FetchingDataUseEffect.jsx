/* eslint-disable react/react-in-jsx-scope */
import {useEffect,useState} from "react";
import api from "../api/axios_instance";
export default function UseEffectHook() {
    const [data, setData] = useState(null);
    const  [error,setError] = useState(null);
    useEffect(() => {
        api
          .get("/posts")
          .then((res) => setData(res.data))
          .catch((err) => setError(err.message));
      }, []);
      return (
        <>
        <div style={{ padding: "1rem", fontFamily: "monospace" }}>
          <h2>API Response</h2>
          {error && <pre style={{ color: 'red' }}>Error: {error}</pre>}
          {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Loading...</p>}
        </div>
        </>
      );
}

