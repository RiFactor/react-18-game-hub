import { SimpleGrid, Text } from "@chakra-ui/react";
import { Game } from "../entities/Game";
import CriticScore from "./CriticScore";
import DefinitionItem from "./DefinitionItem";

interface IProps {
  game: Game;
}

const GameAttributes = ({ game }: IProps) => {
  return (
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
  );
};

export default GameAttributes;
