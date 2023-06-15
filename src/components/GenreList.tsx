import { HStack, List, ListItem, Text, Image } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import GetCroppedImageUrl from "../services/image-url";

const GenreList = () => {
  const { data, error } = useGenres();

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
              <Text fontSize="lg">{genre.name}</Text>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
