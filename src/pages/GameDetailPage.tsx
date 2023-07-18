import { Heading, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ExpandableText from "../components/ExpandableText";
import useGame from "../hooks/useGame";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!); // slug || "" // will never be null

  if (isLoading) return <Spinner />; // Todo: Skeleton container instead of spinner

  // ToDo: catch error to specify to user to find available games / redirect to nearest page
  if (error || !game) throw error; // Answered: main.tsx -> ReactQuery defaults to 3 retries

  return (
    <>
      <Heading>{game.name}</Heading>
      <ExpandableText>{game.description_raw}</ExpandableText>
      <Heading>Platforms</Heading>
      {game.parent_platforms?.map((p) => (
        <p key={p.platform.id}>{p.platform.name}</p>
        // Answered -- don't use optional chaining until TS error occurs; client-side errors usually TS error (type is wrong)
      ))}
      <Heading>Genres</Heading>
      {game.genres.map((g) => (
        <p key={g.id}>{g.name}</p>
      ))}
      <Heading>Metascore</Heading>
      <Heading>Publishers</Heading>
    </>
  );
};

export default GameDetailPage;
