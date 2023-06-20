import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

const GameCardContainer = ({ children }: IProps) => {
  return (
    // removing width is equivalent to setting to take up 100% of remaining space
    <Box borderRadius={10} overflow="hidden" height="350px">
      {children}
    </Box>
  );
};

export default GameCardContainer;
