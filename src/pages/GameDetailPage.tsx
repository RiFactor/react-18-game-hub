import { Heading, Spinner, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import ExpandableText from "../components/ExpandableText";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!); // slug || "" // will never be null

  if (isLoading) return <Spinner />; // Todo: Skeleton container instead of spinner

  if (error || !game) throw error; // Question -- stuck on infinite load when slug doesn't exist

  return (
    <>
      <Heading>{game.name}</Heading>
      <ExpandableText>{game.description_raw}</ExpandableText>
      <Heading>Platforms</Heading>
      {game.parent_platforms?.map((p) => (
        <p key={p.platform.id}>{p?.platform.name}</p>
        // Question -- do I need optional chaining
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
