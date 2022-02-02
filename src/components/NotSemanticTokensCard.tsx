import { Box, Heading, useColorMode } from "@chakra-ui/react";

export const NotSemanticTokensCard: React.FC = () => {
  const { colorMode } = useColorMode();
  const backgroundColor = colorMode === "dark" ? "#202225" : "#fff";
  return (
    <Box border="3px solid #000" p={4} borderRadius="20px" bg={backgroundColor}>
      <Heading as="h2" bg={backgroundColor}>
        not semantic tokens
      </Heading>
    </Box>
  );
};
