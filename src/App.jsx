import React from "react";
import Hero from "./Hero/Hero";
import ProjectsCarousel from "./Projects/ProjectsCarousel";
import {
  MantineProvider,
  Container,
  Title,
  Text,
  Button,
  Stack,
  Card,
  Group,
  Badge,
} from "@mantine/core";
import {
  IconBrandReact,
  IconDeviceDesktop,
  IconSettings,
} from "@tabler/icons-react";

export default function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Container size="md" py="xl">
        <Hero />
        <ProjectsCarousel />

        {/* Skills / Features Section */}
        <Title order={2} my="xl" align="center">
          Skills
        </Title>
        <Group position="center" spacing="xl">
          <Stack align="center">
            <IconBrandReact size={48} color="#61dafb" />
            <Text>React</Text>
          </Stack>
          <Stack align="center">
            <IconDeviceDesktop size={48} color="#22b8cf" />
            <Text>Web Design</Text>
          </Stack>
          <Stack align="center">
            <IconSettings size={48} color="#c9557dff" />
            <Text>UI/UX</Text>
          </Stack>
        </Group>
      </Container>
    </MantineProvider>
  );
}
