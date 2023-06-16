import { Grid, GridItem, Show } from "@chakra-ui/react";
import "./App.css";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";

function App() {
  // later use Redux / TanStack
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null); // Question -- why null and not something elese for an empty state

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`, // mobile devices
        lg: `"nav nav" "aside main"`, // 1024px // Question -- why are there two columns
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
            // Question -- does this order matter
            selectedGenre={selectedGenre}
            onSelectGenre={(genre) => setSelectedGenre(genre)}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        {/* Question -- tried using <Flex> and justifyContent / alignItems to left-align platform selector */}
        <PlatformSelector />
        <GameGrid selectedGenre={selectedGenre} />
      </GridItem>
    </Grid>
  );
}

export default App;
