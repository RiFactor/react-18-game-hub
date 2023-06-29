import useGenres from "./useGenres";

// best temp solution to accept optional param
const useGenre = (id?: number) => {
  const { data: genres } = useGenres();

  return genres?.results.find((g) => g.id === id);
};

export default useGenre;
