import { Platform } from "./Platform";

export interface Game {
  id: number;
  name: string;
  slug: string;
  background_image: string;
  // Later -- review this w/ PlatformIconList.tsx
  parent_platforms?: { platform: Platform }[];
  metacritic: number;
  genres: string; // until an error occurs, don't make this optional based on docs
  rating_top: number;
  description_raw: string;
}
