import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
// import useFindById from "../hooks/useFindById";
import usePlatform from "../hooks/usePlatform";
import useGameQueryStore from "./store";

const PlatformSelector = () => {
  // const {setPlatformId, platformgameQuery.platformId} = useGameQueryStore();

  const { data: platforms, error } = usePlatforms(); // Mosh didn't give data an alias
  const setSelectedPlatformId = useGameQueryStore((s) => s.setPlatformId);
  const selectedPlatformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const selectedPlatform = usePlatform(selectedPlatformId);

  // const selectedPlatform = useFindById<Platform>({
  //   platforms,
  //   id: selectedPlatformId,
  // });

  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {platforms?.results.map((platform) => (
          <MenuItem
            onClick={() => setSelectedPlatformId(platform.id)}
            key={platform.id}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
