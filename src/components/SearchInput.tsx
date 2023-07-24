import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import useGameQueryStore from "./store";
import { useNavigate } from "react-router-dom";

const SearchInput = () => {
  const setSearchText = useGameQueryStore((s) => s.setSearchText);
  const navigate = useNavigate();

  const ref = useRef<HTMLInputElement>(null);

  return (
    <form // must wrap in form
      onSubmit={(e) => {
        e.preventDefault();
        if (ref.current) {
          setSearchText(ref.current.value); // check inside here
          navigate("/"); // Question -- does the order matter, I put it before setSearchText
        }
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          ref={ref}
          borderRadius={20}
          placeholder="Search games..."
          variant="filled"
        />
        ;
      </InputGroup>
    </form>
  );
};

export default SearchInput;
