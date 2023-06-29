import { Heading } from "@chakra-ui/react";
import { IGameQuery } from "../App";
import useGenres from "../hooks/useGenres";
import usePlatforms from "../hooks/usePlatforms";

interface IProps {
  gameQuery: IGameQuery;
}

const GameHeading = ({ gameQuery }: IProps) => {
  const { data: genres } = useGenres();
  const genre = genres?.results.find((g) => g.id === gameQuery.genreId);
  const { data: platforms } = usePlatforms();
  const platform = platforms?.results.find(
    (p) => p.id === gameQuery.platformId
  );

  const heading = `
  ${platform?.name || ""} 
    ${
      genre?.name === "Board Games" // avoids "Board Games Games"
        ? "Board"
        : genre?.name || "" // Question -- is there a more concise way to write this?
    } 
  Games
  `;

  return (
    <Heading as="h1" fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
