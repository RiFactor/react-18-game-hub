import {
  HStack,
  List,
  ListItem,
  Image,
  Spinner,
  Button,
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
      <List>
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                src={GetCroppedImageUrl(genre.image_background)}
              />
              <Button
                variant="link"
                // Question -- would it be easier to just pass the id?
                onClick={() => onSelectGenre(genre)}
                fontSize="lg"
                fontWeight={selectedGenre?.id === genre.id ? "bold" : "normal"}
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
