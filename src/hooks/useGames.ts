import { useInfiniteQuery } from "@tanstack/react-query";
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
  return useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          genres: gameQuery?.genreId, // Question -- does this need the '?' - Mosh didn't include it - is it b/c the value is undefined so that can be passed as a param?
          parent_platforms: gameQuery?.platformId, // Question -- does this need the '?' - Mosh didn't include it
          ordering: gameQuery.sortOrder, // "ordering": need to match the term using in the rawg API https://api.rawg.io/docs/#operation/games_list
          search: gameQuery.searchText,
          page: pageParam,
        },
      }),
    staleTime: 1 * 60 * 1000, // 1 minute
    // keepPreviousData: true, // Question -- what does this do
    // NTS - must remember return keyword when using curly braces
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
  });
};

export default useGames;
