import useTrailers from "../hooks/useTrailers";

interface IProps {
  gameId: number;
}

const GameTrailer = ({ gameId }: IProps) => {
  // Question - how do I write this prop inline
  const { data, error, isLoading } = useTrailers(gameId);

  // console.log(data); // Question -- tailer.ts

  if (isLoading) return null; // Question -- is this b/c the rest of the page has loaded so just return empty componentx (check vid if explained there)
  if (error) throw error;

  const first = data?.results[0]; // avoid repetition

  // if statement means don't need optional chaining now
  return first ? (
    <video src={first.data[480]} poster={first.preview} controls />
  ) : null;
};

export default GameTrailer;
