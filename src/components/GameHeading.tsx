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

  // avoids "Board Games Games", neater than string literals, undefined won't be joined
  const heading = [
    platform?.name,
    genre?.name.replace(" Games", ""),
    "Games",
  ].join(" ");

  return (
    <Heading as="h1" fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
