import react from "react";
import { motion } from "framer-motion";

import { Box, Heading, Text, Button, Stack, Container } from "@chakra-ui/react";

export default function LandingPage() {
  return (
    <Box bg="gray.900" color="white" minH="100vh" display="flex" alignItems="center">
      <Container maxW="container.lg">
        <Stack spacing={6}>
          <Heading fontSize={{ base: "3xl", md: "5xl" }}>
            Hi, I'm Mike — Full Stack Developer
          </Heading>

          <Text fontSize="lg" color="gray.300">
            I build clean, modern websites and full-stack applications that focus on performance
            and user experience.
          </Text>

          <Stack direction="row">
            <Button colorScheme="purple" size="lg">
              View My Work
            </Button>
            <Button variant="outline" colorScheme="purple" size="lg">
              Contact Me
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}