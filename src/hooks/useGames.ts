import { IGameQuery } from "../App";
import useData from "./useData";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

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

const useGames = (gameQuery: IGameQuery) =>
  useData<Game>(
    "/games",
    {
      params: {
        genres: gameQuery.genre?.id,
        platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder, // "ordering": need to match the term using in the rawg API https://api.rawg.io/docs/#operation/games_list
        search: gameQuery.searchText,
      },
    },
    [gameQuery]
  );

export default useGames;
