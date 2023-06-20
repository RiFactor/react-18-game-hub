import { HStack, Image, Text } from "@chakra-ui/react";
import Logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface IProps {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: IProps) => {
  return (
    // justifyContent="space-between" no longer needed w/ 3 elements
    <HStack padding="0.625rem" spacing={2}>
      <Image src={Logo} boxSize="60px" />
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
