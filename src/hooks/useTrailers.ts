import { useQuery } from "@tanstack/react-query";
import Trailer from "../entities/Trailer";
import APIClient from "../services/api-client";

const useTrailers = (gameId: number) => {
  const apiClient = new APIClient<Trailer>(`/games/${gameId}/movies`);

  return useQuery({
    queryKey: ["trailers", gameId], // Question -- why is the querykey 'trailers' / how do you know
    queryFn: apiClient.getAll, // Question -- why don't you use the arrow fn here but you do elsewhere, b/c not passing an arg?
  });
};

export default useTrailers;
