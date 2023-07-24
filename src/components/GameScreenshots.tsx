import { css } from "@emotion/react";
import useScreenshots from "../hooks/useScreenshots";
import { Image, SimpleGrid } from "@chakra-ui/react";

interface IProps {
  gameId: number;
}

const GameScreenshots = ({ gameId }: IProps) => {
  const { data, error, isLoading } = useScreenshots(gameId);
  console.log(data);

  if (isLoading) return null;
  if (error) throw error;

  const array = data?.results;

  // ChatGPT
  const customGridStyles = css`
    @media screen and (max-width: 767px) {
      grid-template-columns: 1fr;
    }

    /* Larger screens: 2 columns */
    @media screen and (min-width: 768px) {
      grid-template-columns: 1fr 1fr;
    }
  `;

  return array ? (
    // <div className="grid-container bg">
    <SimpleGrid columns={2} spacing={10} css={customGridStyles}>
      {array.map((image: any) => (
        <Image key={image.id} src={image.image} />
      ))}
    </SimpleGrid>
  ) : // </div>
  null;
};

export default GameScreenshots;
