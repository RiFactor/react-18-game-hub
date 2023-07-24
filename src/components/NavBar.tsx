import { HStack, Image } from "@chakra-ui/react";
import Logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    // justifyContent="space-between" no longer needed w/ 3 elements
    <HStack padding="0.625rem" spacing={2}>
      <Link to="/">
        <Image src={Logo} boxSize="60px" />
      </Link>
      <Link to="/">
        <SearchInput />
      </Link>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
