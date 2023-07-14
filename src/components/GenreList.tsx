import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import GetCroppedImageUrl from "../services/image-url";
import useGameQueryStore from "./store";

const GenreList = () => {
  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const setSelectedGenreId = useGameQueryStore((s) => s.setGenreId);

  const { data, error, isLoading } = useGenres();

  if (error) return null;

  // Challenge - create skeleton states
  if (isLoading) return <Spinner />;

  return (
    <>
      {/* {error && <p>{error}</p>} */}
      <Heading fontSize="2xl" marginBottom={3} textAlign="start">
        Genres
      </Heading>
      <List>
        {data?.results.map((genre) => (
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
                onClick={() => setSelectedGenreId(genre.id)}
                fontSize="lg"
                // Answered --  order of equivalence doesn't matter e.g. "selectedGenre?.id === genre.id ?"
                fontWeight={genre.id === selectedGenreId ? "bold" : "normal"}
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
