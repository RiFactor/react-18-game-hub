import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import "./App.css";
import GameGrid from "./components/GameGrid";
import GameHeading from "./components/GameHeading";
import GenreList from "./components/GenreList";
import NavBar from "./components/NavBar";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";

// undefined: absence of a value (unselected and can't unselected)
// null: intentional absence of a value

function App() {
  // later use Redux / TanStack
  // const [gameQuery, setGameQuery] = useState<IGameQuery>({} as IGameQuery);
  // const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null); // Online -- why null and not something elese for an empty state

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
          // Answered - Notes -- does this order matter
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        {/* Online -- tried using <Flex> and justifyContent / alignItems to left-align platform selector */}
        <Box
          paddingLeft={10}
          justifyContent="left"
          alignItems="start"
          display="flex"
          flexDirection="column"
          gap={5}
        >
          <GameHeading />
          <HStack spacing={5}>
            <PlatformSelector />
            <SortSelector />
          </HStack>
        </Box>
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
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
