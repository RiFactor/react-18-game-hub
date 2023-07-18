import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface IProps {
  children: string;
  limit?: number;
}

const ExpandableText = ({ children, limit = 300 }: IProps) => {
  const [expanded, setExpanded] = useState(false);
  if (!children) return null;

  if (children.length < limit) return <Text>children</Text>;

  const croppedText = expanded
    ? children
    : children.substring(0, limit) + "...";

  return (
    <Text>
      {croppedText}
      <Button
        size="xs"
        marginLeft={1}
        fontWeight="bold"
        colorScheme="yellow"
        // padding={2}
        onClick={() => {
          setExpanded(!expanded);
        }}
      >
        {expanded ? "Show Less" : "Read More"}
      </Button>
    </Text>
  );
};

export default ExpandableText;
