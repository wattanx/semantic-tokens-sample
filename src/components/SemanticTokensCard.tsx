import { Box, Heading } from "@chakra-ui/react";

export const SemanticTokensCard: React.FC = () => (
  <Box border="3px solid #000" p={4} borderRadius="20px" bg="card">
    <Heading as="h2" bg="card">
      semantic tokens
    </Heading>
  </Box>
);
