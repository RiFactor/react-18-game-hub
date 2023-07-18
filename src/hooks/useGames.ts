import { useInfiniteQuery } from "@tanstack/react-query";
import ms from "ms";
import useGameQueryStore from "../components/store";
import APIClient, { FetchResponse } from "../services/api-client";
import { Game } from "../entities/Game";

const apiClient = new APIClient<Game>("/games");
const useGames = () => {
  const gameQuery = useGameQueryStore((s) => s.gameQuery);

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
    staleTime: ms("24h"),
    // keepPreviousData: true, // Question -- what does this do
    // NTS - must remember return keyword when using curly braces
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
  });
};

export default useGames;
