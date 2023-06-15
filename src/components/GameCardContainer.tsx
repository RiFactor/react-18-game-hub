import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

const GameCardContainer = ({ children }: IProps) => {
  return (
    <Box width="200px" borderRadius={10} overflow="hidden" height="300px">
      {children}
    </Box>
  );
};

export default GameCardContainer;
