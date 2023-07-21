import useTrailers from "../hooks/useTrailers";

interface IProps {
  gameId: number;
}

const GameTrailer = ({ gameId }: IProps) => {
  // Question - how do I write this prop inline
  const { data, error, isLoading } = useTrailers(gameId);

  console.log(data); // Question -- tailer.ts

  if (isLoading) return null;
  if (error) throw error;

  const first = data?.results[0];

  return first ? (
    <video src={first.data[480]} poster={first?.preview} controls />
  ) : null;
};

export default GameTrailer;
