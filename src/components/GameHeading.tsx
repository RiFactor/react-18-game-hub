import { Heading } from "@chakra-ui/react";
import { IGameQuery } from "../App";

interface IProps {
  gameQuery: IGameQuery;
}

const GameHeading = ({ gameQuery }: IProps) => {
  const heading = `
  ${gameQuery.platform?.name || ""} 
    ${
      gameQuery.genre?.name === "Board Games" // avoids "Board Games Games"
        ? "Board Game"
        : gameQuery.genre?.name || ""
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
