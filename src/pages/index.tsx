import { Box, Heading, Stack } from "@chakra-ui/react";
import { NotSemanticTokensCard } from "@components/NotSemanticTokensCard";
import { SemanticTokensCard } from "@components/SemanticTokensCard";
import { Container } from "../components/Container";

const Index = () => (
  <Container>
    <Stack spacing={8} py={6}>
      <NotSemanticTokensCard />
      <SemanticTokensCard />
    </Stack>
  </Container>
);

export default Index;
