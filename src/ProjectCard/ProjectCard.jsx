import { Card, Text, Title, Badge, Stack } from "@mantine/core";
import { motion } from "framer-motion";
import "./ProjectCard.css";

export default function ProjectCard({ titel, image, tech, github, description, title }) {
  return (
    <motion.div
      className="project-card-container"
      whileHover={{ scale: 1.05, y: -5 }}
      transition={{ duration: 0.25 }}
    >
      <Card shadow="md" radius="lg" withBorder className="project-card">
        <div className="project-image-wrapper">
          <img src={image} alt={title} className="project-image" />
          <div className="project-image-overlay" />
        </div>

        <Stack spacing="xs" mt="md">
          <Title order={4}>{title}</Title>

          <Badge color="cyan" variant="light" size="sm">
            {tech}
          </Badge>

          <Text size="sm" color="dimmed">
            {description}
          </Text>

          <a href={github} target="_blank" rel="noopener noreferrer">
            <Text className="project-link">View Project →</Text>
          </a>
        </Stack>
      </Card>
    </motion.div>
  );
}