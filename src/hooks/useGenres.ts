import genres from "../data/genres";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

// List of genre seldom updates so take static data copy from backend
// also help w/ UX by reducing number of spinners + loading states on page
// Question -- can we cache this instead?
const useGenres = () => ({ data: genres, error: null, isLoading: null });

export default useGenres;
