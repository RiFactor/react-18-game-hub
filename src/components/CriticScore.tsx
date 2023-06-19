import { Badge } from "@chakra-ui/react";

interface IProps {
  score: number;
}

// Pass props directly w/o using IProps (score: number)
const CriticScore = ({ score }: IProps) => {
  // color = foreground color only
  // high-score 65
  const color = score > 90 ? "green" : score > 60 ? "yellow" : "red";

  return (
    <Badge colorScheme={color} fontSize="14px" paddingX={2} borderRadius="4px">
      {score}
    </Badge>
  );
};

export default CriticScore;
