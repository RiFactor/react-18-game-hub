import useData from "./useData";
import { Genre } from "./useGenres";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  // Question -- review this w/ PlatformIconList.tsx
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  genres: string;
}

const useGames = (
  selectedGenre: Genre | null,
  selectedPlatform: Platform | null
) =>
  useData<Game>(
    "/games",
    { params: { genres: selectedGenre?.id, platform: selectedPlatform?.id } },
    [selectedGenre?.id, selectedPlatform?.id]
  );

export default useGames;
