import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import { Heading, Spinner, Text } from "@chakra-ui/react";
import { useState } from "react";

const GameDetailPage = () => {
  const { slug } = useParams();
  const [showText, setShowText] = useState(false);
  // console.log(slug);
  const { data: game, isLoading, error } = useGame(slug!); // slug || ""
  // as { data: Game; isLoading: boolean; error: any };
  // will never be null

  if (isLoading) return <Spinner />; // Todo: Skeleton container instead of spinner

  if (error || !game) throw error; // stuck on infinite load when slug doesn't exist

  const handleHideText = (text: string) => {
    return (
      <>
        {text.slice(0, 300)}
        <button
          onClick={() => {
            console.log("show");
            setShowText(!showText);
          }}
        >
          More
        </button>
      </>
    );
  };

  const handleShowText = (text: string) => {
    return (
      <>
        {text}
        <button onClick={() => setShowText(!showText)}>Less</button>
      </>
    );
  };

  return (
    <>
      <Heading>{game.name}</Heading>
      <Text>
        {game.description_raw.length > 300
          ? showText
            ? handleShowText(game.description_raw)
            : handleHideText(game.description_raw)
          : game.description_raw.length}
      </Text>
    </>
  );
};

export default GameDetailPage;
