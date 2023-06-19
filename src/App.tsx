import { Box, Flex, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import "./App.css";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/usePlatforms";
import SortSelector from "./components/SortSelector";

export interface IGameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
}

function App() {
  // later use Redux / TanStack
  const [gameQuery, setGameQuery] = useState<IGameQuery>({} as IGameQuery);
  // const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null); // ONline -- why null and not something elese for an empty state

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`, // mobile devices
        lg: `"nav nav" "aside main"`, // 1024px // Answered -- why are there two columns
      }}
      templateColumns={{
        base: "1fr", // 1 fraction i.e. 100%
        lg: "200px 1fr", // 200px, take up 100% of remaining space
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem paddingX={5} area="aside">
          <GenreList
            // Answered - NOtes -- does this order matter
            selectedGenre={gameQuery.genre}
            onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        {/* Online -- tried using <Flex> and justifyContent / alignItems to left-align platform selector */}
        <HStack spacing={5} paddingLeft={10} marginBottom={5}>
          <PlatformSelector
            onSelectPlatform={(platform) =>
              setGameQuery({ ...gameQuery, platform })
            }
            selectedPlatform={gameQuery.platform}
          />
          <SortSelector
            onSort={(sortOrder) => setGameQuery({ ...gameQuery, sortOrder })}
            sortOrder={gameQuery.sortOrder}
          />
        </HStack>
        {/* Alternate display -- didn't have an error so not needed */}
        {/* <Flex paddingLeft={5} marginBottom={5}>
          <Box marginX={5}>
            <PlatformSelector
              onSelectPlatform={(platform) =>
                setGameQuery({ ...gameQuery, platform })
              }
              selectedPlatform={gameQuery.platform}
            />
          </Box>
          <SortSelector
            onSort={(sortOrder) => setGameQuery({ ...gameQuery, sortOrder })}
            sortOrder={gameQuery.sortOrder}
          />
        </Flex> */}
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
