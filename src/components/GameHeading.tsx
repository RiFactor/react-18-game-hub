import { Heading } from "@chakra-ui/react";
import { IGameQuery } from "../App";
import usePlatform from "../hooks/usePlatform";
import useGenre from "../hooks/useGenre";

interface IProps {
  gameQuery: IGameQuery;
}

const GameHeading = ({ gameQuery }: IProps) => {
  const genre = useGenre(gameQuery.genreId);
  const platform = usePlatform(gameQuery.platformId);

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
