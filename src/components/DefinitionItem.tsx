import { Box, Heading } from "@chakra-ui/react";
import { ReactNode } from "react";

interface IProps {
  term: string;
  children: ReactNode | ReactNode[];
}

const DefinitionItem = ({ term, children }: IProps) => {
  return (
    <Box marginY={5}>
      {/* <dt></dt> */}
      <Heading as="dt" fontSize="md" color="gray.600">
        {term}
      </Heading>
      {/* Question -- are all the children getting separate dd tags or all in the one tag */}
      <dd>{children}</dd>
    </Box>
  );
};

export default DefinitionItem;
