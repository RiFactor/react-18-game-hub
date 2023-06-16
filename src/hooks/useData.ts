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
) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(
    () => {
      // Question -- review the controller and how it works
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
      return () => controller.abort();
    },
    deps ? [...deps, endpoint] : [endpoint] // Question -- unsure how to resolve this error
  );
  return { data, error, isLoading };
};

export default useData;
