import { GridItem, Heading, SimpleGrid, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ExpandableText from "../components/ExpandableText";
import useGame from "../hooks/useGame";
import GameAttributes from "../components/GameAttributes";
import GameTrailer from "../components/GameTrailer";
import GameScreenshots from "../components/GameScreenshots.tsx";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!); // slug || "" // will never be null

  if (isLoading) return <Spinner />; // Todo: Skeleton container instead of spinner

  // ToDo: catch error to specify to user to find available games / redirect to nearest page
  if (error || !game) throw error; // Answered: main.tsx -> ReactQuery defaults to 3 retries

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
      {/* Box or GridItem render a div, roughly interchangeable */}
      <GridItem>
        <Heading>{game.name}</Heading>
        <ExpandableText>{game.description_raw}</ExpandableText>
        <GameAttributes game={game} />
      </GridItem>
      <GridItem>
        <GameTrailer gameId={game.id} />
        <GameScreenshots gameId={game.id} />
      </GridItem>
    </SimpleGrid>
  );
};

export default GameDetailPage;
