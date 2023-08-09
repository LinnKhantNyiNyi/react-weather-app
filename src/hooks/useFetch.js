import { useEffect, useState } from "react";

function useFetch(url) {
  let [data, setData] = useState(null);
  let [loading, setloading] = useState(false);
  let [error, setError] = useState(false);

  useEffect(() => {
    let abortController = new AbortController();
    let signal = abortController.signal;
    setloading(true);
    fetch(url, {
      signal,
    })
      .then((res) => {
        if (!res.ok) {
          throw Error("Something went wrong");
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setError(null);
        setloading(false);
      })
      .catch((e) => {
        setError(e.message);
      });
    return () => {
      abortController.abort();
    };
  }, [url]);

  return { data, loading, error };
}

export default useFetch;
