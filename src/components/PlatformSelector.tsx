import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms, { Platform } from "../hooks/usePlatforms";
import useFindById from "../hooks/useFindById";
import usePlatform from "../hooks/usePlatform";

interface IProps {
  // Online  review -- diff between Types and Props
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatformId?: number;
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatformId }: IProps) => {
  const { data: platforms, error } = usePlatforms(); // Mosh didn't give data an alias

  const selectedPlatform = usePlatform({ platforms, id: selectedPlatformId });

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
            onClick={() => onSelectPlatform(platform)}
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
