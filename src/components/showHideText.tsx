import { Button } from "@chakra-ui/react";

interface IProps {
  text: string;
  showText: boolean;
  setShowText: () => void;
}

const showHideText = ({ text, showText, setShowText }: IProps) => {
  return (
    <>
      {showText ? text : text.slice(0, 300)}
      <Button
        // padding={2}
        onClick={() => {
          setShowText();
        }}
      >
        {showText ? "Less" : "More"}
      </Button>
    </>
  );
};

export default showHideText;
