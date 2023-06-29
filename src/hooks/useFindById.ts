import { FetchResponse } from "./../services/api-client";
import { Genre } from "./useGenres";
import { Platform } from "./usePlatforms";

interface {
  property: FetchResponse;
  id?: number;
}

const useFindById = ({ property, id }: FetchResponse<T>) => {
  return property?.results.find((p: T) => p.id) === id;
};

export default useFindById;
