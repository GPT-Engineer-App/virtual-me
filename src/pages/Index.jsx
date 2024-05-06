import { Box, Flex, Text, VStack, Link, Container, Heading } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Box as="header" bg="brand.800" w="100%" p={4} color="white">
        <Flex justify="space-between" align="center">
          <Text fontSize="xl" fontWeight="bold">John Doe</Text>
          <Box>
            <Link href="#about" p={2}>About</Link>
            <Link href="#projects" p={2}>Projects</Link>
            <Link href="#contact" p={2}>Contact</Link>
          </Box>
        </Flex>
      </Box>
      <Box id="about" p={5}>
        <Heading as="h2" size="lg" mb={3}>About Me</Heading>
        <Text fontSize="md">I'm a passionate software developer with a knack for building scalable web applications. My expertise includes modern JavaScript frameworks and a keen eye for user experience.</Text>
      </Box>
      <Box id="projects" p={5}>
        <Heading as="h2" size="lg" mb={3}>Projects</Heading>
        <VStack spacing={4}>
          <Text fontSize="md">Project 1: E-commerce Web App</Text>
          <Text fontSize="md">Project 2: Real-time Chat Application</Text>
        </VStack>
      </Box>
      <Box id="contact" p={5} bg="brand.700" color="white">
        <Heading as="h2" size="lg" mb={3}>Contact</Heading>
        <VStack spacing={4}>
          <Link href="https://github.com" isExternal><FaGithub /> GitHub</Link>
          <Link href="https://linkedin.com" isExternal><FaLinkedin /> LinkedIn</Link>
          <Link href="mailto:example@example.com"><FaEnvelope /> Email</Link>
        </VStack>
      </Box>
    </Container>
  );
};

export default Index;