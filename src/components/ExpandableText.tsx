import { Button } from "@chakra-ui/react";
import { useState } from "react";

interface IProps {
  children: string;
  limit?: number;
}

const ExpandableText = ({ children, limit = 300 }: IProps) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      {expanded ? children : children.slice(0, limit)}
      <Button
        // padding={2}
        onClick={() => {
          setExpanded(!expanded);
        }}
      >
        {expanded ? "Less" : "More"}
      </Button>
    </>
  );
};

export default ExpandableText;
