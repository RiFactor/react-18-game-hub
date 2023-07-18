import { Box, Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "../../components/NavBar";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <>
      {/* ToDo:  can put navbar in route but more complex, fine for now as layout unlikely to change */}
      <NavBar />
      <Box padding={5}>
        <Heading>Oops...</Heading>
        <Text>
          {isRouteErrorResponse(error)
            ? "You got 404'd."
            : "Sorry, an unexpected error has occurred."}
        </Text>
      </Box>
    </>
  );
};

export default ErrorPage;
