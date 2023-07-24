import { Image, SimpleGrid } from "@chakra-ui/react";
import useScreenshots from "../hooks/useScreenshots";

interface IProps {
  gameId: number;
}

const GameScreenshots = ({ gameId }: IProps) => {
  const { data, error, isLoading } = useScreenshots(gameId);
  console.log(data);

  if (isLoading) return null;
  if (error) throw error;

  const array = data?.results;

  return array ? (
    // medium or larger will have 2 columns
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
      {array.map((file: any) => (
        <Image key={file.id} src={file.image} />
      ))}
    </SimpleGrid>
  ) : null;
};

export default GameScreenshots;
