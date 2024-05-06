import { Box, Flex, Text, Link, Container } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Box as="header" bg="brand.800" w="100%" p={4} color="white">
        <Flex justify="space-between" align="center">
          <Text fontSize="xl" fontWeight="bold">John Doe</Text>
          <Box>
            <Link href="/about" p={2}>About</Link>
            <Link href="/projects" p={2}>Projects</Link>
            <Link href="/contact" p={2}>Contact</Link>
          </Box>
        </Flex>
      </Box>
    </Container>
  );
};

export default Index;