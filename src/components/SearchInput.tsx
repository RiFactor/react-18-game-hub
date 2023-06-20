import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface IProps {
  onSearch: (searchText: string) => void;
}

const SearchInput = ({ onSearch }: IProps) => {
  const ref = useRef<HTMLInputElement>(null);

  if (ref.current) {
    // ref.prevent.Default();
    // onSearch(ref.current.value);
    // console.log(ref.current.value);
  }

  return (
    <InputGroup>
      <InputLeftElement children={<BsSearch />} />
      <Input
        ref={ref}
        onChange={(e) => {
          e.preventDefault();
          onSearch(e.target.value);
        }}
        borderRadius={20}
        placeholder="Search games..."
        variant="filled"
      />
      ;
    </InputGroup>
  );
};

export default SearchInput;
