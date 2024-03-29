import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Game from "../entities/Game";
import GetCroppedImageUrl from "../services/image-url";
import CriticScore from "./CriticScore";
import Emoji from "./Emoji";
import PlatformIconList from "./PlatformIconList";

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
        <Link to={"/games/" + game.slug}>{game.name}</Link>
        <Emoji rating={game.rating_top} />
      </Heading>
    </CardBody>
  </Card>
);

export default GameCard;
