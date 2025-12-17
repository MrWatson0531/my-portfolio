import React, { useRef, useState } from "react";
import { Container, Title } from "@mantine/core";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import "./Projects.css";
import ProjectCard from "../ProjectCard/ProjectCard";

const projects = [
  {
    title: "Loli B Bakery",
    description: "Full stack bakery e-commerce platform with JWT auth.",
    tech: "Full Stack",
    image: "/images/LoliPreview.png",
    github: "https://github.com/MrWatson0531/Loli-B-Bakery",
  },
  {
    title: "WTWR",
    description: "Weather-based clothing suggestion app.",
    tech: "Full Stack",
    image: "/images/wtwrPreview.png",
    github: "https://github.com/MrWatson0531/se_project_react  ",
  },
  {
    title: "Around the US",
    description: "Chronicles the adventures of Jaques Cousteau.",
    tech: "UI / UX",
    image: "/images/usPreview.png",
    github: "https://github.com/MrWatson0531/se_project_aroundtheus",
  },
];

export default function ProjectsCarousel() {
  const ref = useRef(null);
  const [index, setIndex] = useState(0);

  const scrollToIndex = (i) => {
    if (!ref.current) return;
    const cardWidth = ref.current.children[0].offsetWidth + 20;
    ref.current.scrollTo({ left: i * cardWidth, behavior: "smooth" });
    setIndex(i);
  };

  const next = () => scrollToIndex(index + 1);
  const prev = () => scrollToIndex(index - 1);

  return (
    <Container className="projects-carousel-container" size="xl" py="xl">
      <Title order={2} align="center" mb="xl">
        Featured Projects
      </Title>

      <div className="carousel-wrapper">
        <button
          className={`arrow left ${index === 0 ? "hidden" : ""}`}
          onClick={prev}
        >
          <ChevronLeft size={32} />
        </button>

        <div className="carousel-scroll" ref={ref}>
          {projects.map((project, i) => (
            <div className="project-card-wrapper" key={i}>
              <motion.div
                className="project-card-scale"
                whileHover={{ rotateX: 5, rotateY: -5, scale: 1.04 }}
                transition={{ type: "spring", stiffness: 150, damping: 12 }}
              >
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  tech={project.tech}
                  image={project.image}
                  github={project.github}
                />
              </motion.div>
            </div>
          ))}
        </div>

        <button
          className={`arrow right ${
            index === projects.length - 1 ? "hidden" : ""
          }`}
          onClick={next}
        >
          <ChevronRight size={32} />
        </button>
      </div>
    </Container>
  );
}
