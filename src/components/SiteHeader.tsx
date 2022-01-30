import Link from "next/link";
import { Box, HStack, Spacer, useColorMode } from "@chakra-ui/react";
import { DarkModeSwitch } from "./DarkModeSwitch";

export const SiteHeader = () => {
  const { colorMode } = useColorMode();
  return (
    <Box
      as="header"
      position="sticky"
      p="1rem 0"
      top="0"
      zIndex="sticky"
      backgroundColor={colorMode === "dark" ? "#000" : "#fff"}
    >
      <Box maxW="780px" margin="0 auto">
        <HStack alignItems="center" fontWeight="bold" px="6">
          <Box>
            <Link href="/" passHref>
              <Box as="a" alignItems="center" textDecoration="none">
                Semantic Tokens Sample
              </Box>
            </Link>
          </Box>
          <Spacer />
          <DarkModeSwitch />
        </HStack>
      </Box>
    </Box>
  );
};
