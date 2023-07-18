import { Heading, Spinner, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import ShowHideText from "../components/showHideText";
import useGame from "../hooks/useGame";

const GameDetailPage = () => {
  const { slug } = useParams();
  const [showText, setShowText] = useState(false);
  const { data: game, isLoading, error } = useGame(slug!); // slug || "" // will never be null

  if (isLoading) return <Spinner />; // Todo: Skeleton container instead of spinner

  if (error || !game) throw error; // Question -- stuck on infinite load when slug doesn't exist

  return (
    <>
      <Heading>{game.name}</Heading>
      <Text>
        {game.description_raw.length > 300 ? (
          <ShowHideText
            text={game.description_raw}
            showText={showText}
            setShowText={() => {
              setShowText(!showText);
            }}
          />
        ) : (
          game.description_raw.length
        )}
      </Text>
    </>
  );
};

export default GameDetailPage;
