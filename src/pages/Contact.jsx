import { Box, Container, Heading, Link, VStack } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Box as="header" bg="brand.800" w="100%" p={4} color="white">
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

export default Contact;