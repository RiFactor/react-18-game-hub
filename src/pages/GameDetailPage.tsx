import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import { Button, Heading, Spinner, Text } from "@chakra-ui/react";
import { useState } from "react";

const GameDetailPage = () => {
  const { slug } = useParams();
  const [showText, setShowText] = useState(false);
  const { data: game, isLoading, error } = useGame(slug!); // slug || "" // will never be null

  if (isLoading) return <Spinner />; // Todo: Skeleton container instead of spinner

  if (error || !game) throw error; // Question -- stuck on infinite load when slug doesn't exist

  const showHideText = (text: string) => {
    return (
      <>
        {showText ? text : text.slice(0, 300)}
        <Button
          onClick={() => {
            setShowText(!showText);
          }}
        >
          {showText ? "Less" : "More"}
        </Button>
      </>
    );
  };

  return (
    <>
      <Heading>{game.name}</Heading>
      <Text>
        {game.description_raw.length > 300
          ? showHideText(game.description_raw)
          : game.description_raw.length}
      </Text>
    </>
  );
};

export default GameDetailPage;
