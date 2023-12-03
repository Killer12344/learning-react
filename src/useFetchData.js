import { useEffect, useState } from "react";

const useFetchData = (url) => {
  const [data, setData] = useState([]);
  const [pending, setPending] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetch(url);
        const final = await result.json();
        setData(final);
        setPending(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [url]);

  return { data, pending };
};

export default useFetchData;
