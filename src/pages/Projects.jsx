import { Box, Container, Heading, Text, VStack } from "@chakra-ui/react";

const Projects = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Box as="header" bg="brand.800" w="100%" p={4} color="white">
        <Heading as="h2" size="lg" mb={3}>Projects</Heading>
        <VStack spacing={4}>
          <Text fontSize="md">Project 1: E-commerce Web App</Text>
          <Text fontSize="md">Project 2: Real-time Chat Application</Text>
        </VStack>
      </Box>
    </Container>
  );
};

export default Projects;