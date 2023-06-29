import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import APIClient from "../services/api-client";

const apiClient = new APIClient<Genre>("/genres");

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}
// List of genre seldom updates so take static data copy from backend
// also help w/ UX by reducing number of spinners + loading states on page
// Question -- can we cache this instead?
const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    // Question -- console log, debugging and then get scope but can't see 'block'; vid 24: [6min 44secs]
    // Question -- does this fn get called or does it wait for the 24hr stale time first - think Mosh is saying it won't call til after 24 hrs
    staleTime: 24 * 60 * 60 * 10000, // 24hrs
    initialData: genres, // mitigate showing a loading spinner
  });

export default useGenres;
