import useScreenshots from "../hooks/useScreenshots";
import { Image } from "@chakra-ui/react";

interface IProps {
  gameId: number;
}

const GameScreenshots = ({ gameId }: IProps) => {
  const { data, error, isLoading } = useScreenshots(gameId);
  console.log(data);

  if (isLoading) return null;
  if (error) throw error;

  const array = data?.results;

  return array
    ? array.map((image: any) => <Image key={image.id} src={image.image} />)
    : null;

  // return null;
  // return <div>hi</div>;

  // return <Image src={data?.results[0].image} />;
};

export default GameScreenshots;
