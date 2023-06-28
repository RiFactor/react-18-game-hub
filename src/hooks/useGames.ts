import { useQuery } from "@tanstack/react-query";
import { IGameQuery } from "../App";
import APIClient, { FetchResponse } from "../services/api-client";
import { Platform } from "./usePlatforms";

const apiClient = new APIClient<Game>("/games");
export interface Game {
  id: number;
  name: string;
  background_image: string;
  // Later -- review this w/ PlatformIconList.tsx
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  genres: string;
  rating_top: number;
}

const useGames = (gameQuery: IGameQuery) => {
  // NTS - must remember return keyword when using curly braces
  return useQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: () =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genre?.id,
          parent_platforms: gameQuery.platform?.id,
          ordering: gameQuery.sortOrder, // "ordering": need to match the term using in the rawg API https://api.rawg.io/docs/#operation/games_list
          search: gameQuery.searchText,
        },
      }),
    // NTS - must remember return keyword when using curly braces
  });
};

export default useGames;
