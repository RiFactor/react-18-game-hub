import { useQuery } from "@tanstack/react-query";
import ms from "ms"; // error message for any, yarn add  --D @types/[package]  // for dev dependency only, types not needed for prod
import genres from "../data/genres";
import Genre from "../entities/Genre";
import APIClient from "../services/api-client";

const apiClient = new APIClient<Genre>("/genres");

// List of genre seldom updates so take static data copy from backend
// also help w/ UX by reducing number of spinners + loading states on page
// Question -- can we cache this instead?
const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    // Question -- console log, debugging and then get scope but can't see 'block'; vid 24: [6min 44secs]
    // Todo --Confirm: does this fn get called or does it wait for the 24hr stale time first - think Mosh is saying it won't call til after 24 hrs
    staleTime: ms("24h"),
    initialData: genres, // mitigate showing a loading spinner
  });

export default useGenres;
