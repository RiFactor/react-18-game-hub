import { FetchResponse } from "../services/api-client";
import { Genre } from "./useGenres";

interface IProps {
  genres?: FetchResponse<Genre>;
  id?: number;
}

const useGenre = ({ genres, id }: IProps) => {
  return genres?.results.find((g) => g.id === id);
};

export default useGenre;
