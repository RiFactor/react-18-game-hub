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
}

const GenreList = ({ onSelectGenre }: IProps) => {
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
