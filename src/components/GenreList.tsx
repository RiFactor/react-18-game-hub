import {
  HStack,
  List,
  ListItem,
  Image,
  Spinner,
  Button,
  Heading,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import GetCroppedImageUrl from "../services/image-url";

interface IProps {
  onSelectGenre: (genre: Genre) => void; // callback fn
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: IProps) => {
  const { data, error, isLoading } = useGenres();

  if (error) return null;

  // Challenge - create skeleton states
  if (isLoading) return <Spinner />;

  return (
    <>
      {error && <p>{error}</p>}
      <Heading fontSize="2xl" marginBottom={3} textAlign="start">
        Genres
      </Heading>
      <List>
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                objectFit="cover" // scales images retain aspect ratio (i.e. not squished)
                boxSize="32px"
                borderRadius={8}
                src={GetCroppedImageUrl(genre.image_background)}
              />
              <Button
                paddingStart={0}
                whiteSpace="normal"
                textAlign="left" // so that wrapped text isn't center aligned
                variant="link"
                // Review -- would it be easier to just pass the id?
                onClick={() => onSelectGenre(genre)}
                fontSize="lg"
                // Answered --  order of equivalence doesn't matter e.g. "selectedGenre?.id === genre.id ?"
                fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
