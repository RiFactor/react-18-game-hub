import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import { Heading, Spinner, Text } from "@chakra-ui/react";

const GameDetailPage = () => {
  const { slug } = useParams();
  // console.log(slug);
  const { data: game, isLoading, error } = useGame(slug!); // slug || ""
  // as { data: Game; isLoading: boolean; error: any };
  // will never be null

  if (isLoading) return <Spinner />; // Todo: Skeleton container instead of spinner

  if (error || !game) throw error; // stuck on infinite load when slug doesn't exist

  return (
    <>
      <Heading>{game.name}</Heading>
      <Text>{game.description_raw}</Text>
    </>
  );
};

export default GameDetailPage;
