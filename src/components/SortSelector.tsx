import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React from "react";
import { BsChevronDown } from "react-icons/bs";

const SortSelector = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Sort By: Relevance
      </MenuButton>
      <MenuList>Relevance</MenuList>
      <MenuList>Date Added</MenuList>
      <MenuList>Name</MenuList>
      <MenuList>Release Date</MenuList>
      <MenuList>Popularity</MenuList>
      <MenuList>Average Rating</MenuList>
    </Menu>
  );
};

export default SortSelector;
