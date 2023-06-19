import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";

interface FetchResponse<T> {
  count: number;
  results: T[];
}

const useData = <T>(
  endpoint: string,
  requestConfig?: AxiosRequestConfig,
  deps?: any[]
  // deps = []
) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(
    () => {
      // Online -- review the controller and how it works
      const controller = new AbortController();
      setIsLoading(true);
      apiClient
        .get<FetchResponse<T>>(endpoint, {
          signal: controller.signal,
          ...requestConfig,
        }) //2nd arg - Axios Request Config object can pass data in request body and set query string param etc.
        .then((res) => {
          setData(res.data.results);
          setIsLoading(false); // .final method doesn't work on strict mode so have to implement in .then and in .catch
        })
        .catch((err) => {
          if (err instanceof CanceledError) return;
          setError(err.message);
          setIsLoading(false);
        });
      return () => controller.abort(); //Answered -  clean up function, triggered on next use effect
    },
    deps ? [endpoint, requestConfig, ...deps] : [endpoint, requestConfig] // ONLINE - find solution --ignore eslint error; put ...deps at end of array
  );
  return { data, error, isLoading };
};

export default useData;
