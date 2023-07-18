import { Heading, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import CriticScore from "../components/CriticScore";
import ExpandableText from "../components/ExpandableText";
import useGame from "../hooks/useGame";
import DefinitionItem from "../components/DefinitionItem";

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
      <SimpleGrid columns={2} as="dl">
        {/* dl for definition list, better organised HTML markup, same display */}
        <DefinitionItem term="Platforms">
          {game.parent_platforms?.map(({ platform }) => (
            <Text key={platform.id}>{platform.name}</Text>
            // Answered -- don't use optional chaining until TS error occurs; client-side errors usually TS error (type is wrong)
          ))}
        </DefinitionItem>
        <DefinitionItem term="Metascore">
          <CriticScore score={game.metacritic} />
        </DefinitionItem>
        <DefinitionItem term="Genres">
          {game.genres.map((genre) => (
            <Text key={genre.id}>{genre.name}</Text>
          ))}
        </DefinitionItem>
        {/* Question -- is it better to wrap the whole section in a conditional to check if publishers exist rather than have an empty publishers list */}
        <DefinitionItem term="Publishers">
          {game.publishers?.map((publisher) => (
            <Text key={publisher.id}>{publisher.name}</Text>
          ))}
        </DefinitionItem>
      </SimpleGrid>
    </>
  );
};

export default GameDetailPage;
