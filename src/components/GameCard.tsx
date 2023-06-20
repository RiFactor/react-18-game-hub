import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import GetCroppedImageUrl from "../services/image-url";

interface IProps {
  game: Game;
}

const GameCard = ({ game }: IProps) => (
  <Card>
    <Image src={GetCroppedImageUrl(game.background_image)} />
    <CardBody>
      <Heading fontSize="2xl">{game.name}</Heading>
      <HStack justifyContent="space-between">
        <PlatformIconList
          platforms={
            game?.parent_platforms
              ? game.parent_platforms.map((p) => p.platform)
              : [] // Question -- searching "club penguin" caused an error, is this fix ok?
          }
        />
        {/* Design Smell: BED better name for metacritic score */}
        <CriticScore score={game.metacritic} />
      </HStack>
    </CardBody>
  </Card>
);

export default GameCard;
