import { Box, Container, Heading, Text } from "@chakra-ui/react";

const About = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Box as="header" bg="brand.800" w="100%" p={4} color="white">
        <Heading as="h2" size="lg" mb={3}>About Me</Heading>
        <Text fontSize="md">I'm a passionate software developer with a knack for building scalable web applications. My expertise includes modern JavaScript frameworks and a keen eye for user experience.</Text>
      </Box>
    </Container>
  );
};

export default About;