import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

const GameCardContainer = ({ children }: IProps) => {
  return (
    // removing width is equivalent to setting to take up 100% of remaining space
    <Box
      _hover={{
        transform: "scale(1.03)",
        transition: "transform .15s ease-in",
      }}
      borderRadius={10}
      overflow="hidden"
      height="350px"
    >
      {children}
    </Box>
  );
};

export default GameCardContainer;
