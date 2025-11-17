import React from "react";
import { Container, Card, Text, Title, Stack, Badge } from "@mantine/core";
import { motion } from "framer-motion";
import { FaReact, FaDatabase, FaLaptopCode } from "react-icons/fa";
import { GiCupcake, GiDivingHelmet } from "react-icons/gi";
import { WiDayCloudy } from "react-icons/wi";
import FadeInWhenVisible from "../FadeInWhenVisible/FadeInWhenVisible";
import { useInView } from "react-intersection-observer";
import { defaultConditions } from "@chakra-ui/react/preset-base";

const projectsData = [
  {
    title: "Portfolio website",
    description: "Sleek personal portfolio built with React and Mantine.",
    tech: "React",
    icon: <FaLaptopCode size={40} color="#61dafb" />,
    github: "#",
  },
  {
    title: "Loli B Bakery",
    description:
      " Fully Stack e-commerce bakery site built using React and Express",
    tech: "Full Stack",
    icon: <GiCupcake size={40} color="#22b8cf" />,
    github: "https://github.com/MrWatson0531/Loli-B-Bakery",
  },
  {
    title: "WTWR",
    description:
      "A Full stack app that tells you the weather and give clothing options accordingly.",
    tech: "Full Stack",
    icon: <WiDayCloudy size={40} color="#f06595" />,
    github: "#",
  },
  {
    title: "Around the US",
    description: "An app chronicalling the adventures of Jaques Coustoue",
    tech: "UX / UI",
    icon: <GiDivingHelmet size={40} color="rgba(164, 16, 164, 1)" />,
    github: "#",
  },
];

export default function ProjectsCarousel() {
  return (
    <Container className="projects-carousel-container" size="xl" py="xl">
      <Title order={2} align="center" mb="xl">
        Featured Projects
      </Title>

      {projectsData.map((project, index) => (
        <FadeInWhenVisible key={index} delay={index * 0.15}>
          <motion.div
            key={index}
            className="project-card-wrapper"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Card
              shadow="lg"
              p="lg"
              radius="lg"
              withBorder
              className="project-card"
            >
              <Stack align="center" spacing="md">
                {project.icon}
                <Title order={4}>{project.title}</Title>
                <Badge color="cyan" variant="light">
                  {project.tech}
                </Badge>
                <Text size="sm" color="dimmed" align="center">
                  {project.description}
                </Text>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Text color="indigo" weight={500}>
                    View Project
                  </Text>
                </a>
              </Stack>
            </Card>
          </motion.div>
        </FadeInWhenVisible>
      ))}
    </Container>
  );
}
