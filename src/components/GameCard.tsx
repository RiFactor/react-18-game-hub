import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import GetCroppedImageUrl from "../services/image-url";
import Emoji from "./Emoji";

interface IProps {
  game: Game;
}

const GameCard = ({ game }: IProps) => (
  <Card>
    <Image src={GetCroppedImageUrl(game.background_image)} />
    <CardBody>
      <HStack justifyContent="space-between" marginBottom={3}>
        <PlatformIconList
          platforms={
            game.parent_platforms?.map((p) => p.platform) || [] //Answered - better to update game interface w/ optional param (RAWG docs is wrong)
            // game?.parent_platforms
            //   ? game.parent_platforms.map((p) => p.platform)
            //   : [] // Answered: fine -- searching "club penguin" caused an error, is this fix ok?
          }
        />
        {/* Design Smell: BED better name for metacritic score */}
        <CriticScore score={game.metacritic} />
      </HStack>
      <Heading fontSize="2xl" textAlign="left">
        {game.name}
        <Emoji rating={game.rating_top} />
      </Heading>
    </CardBody>
  </Card>
);

export default GameCard;
