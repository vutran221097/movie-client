import { useState } from "react";
import axios from "axios";

const useAxios = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const sendRequest = async (url) => {
    try {
      setIsLoading(true);
      const data = await axios.get(url);
      if (data.status === 200) {
        setIsLoading(false);
        return data.data;
      }
    } catch (e) {
      setError(e);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, error, sendRequest };
};

export default useAxios;
