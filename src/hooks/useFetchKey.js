import { useEffect, useState } from "react";

function useFetchKey(url) {
  //   let [data, setData] = useState(null);
  let [Key, SetKey] = useState("");
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
        // setData(data);
        SetKey(data[0].Key);
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

  return { Key, loading, error };
}

export default useFetchKey;
