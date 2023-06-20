import BullsEyeEmoji from "../assets/bulls-eye.webp";
import MehEmoji from "../assets/meh.webp";
import ThumbsUpEmoji from "../assets/thumbs-up.webp";
import { Image, ImageProps } from "@chakra-ui/react";

interface IProps {
  rating: number;
}

const Emoji = ({ rating }: IProps) => {
  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: MehEmoji, alt: "Meh", boxSize: "25px" },
    4: { src: ThumbsUpEmoji, alt: "Great", boxSize: "25px" },
    5: { src: BullsEyeEmoji, alt: "Exceptional", boxSize: "35px" },
  };

  return <Image {...emojiMap[rating]} marginTop={1} />;
};

export default Emoji;
