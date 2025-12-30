import React, { useRef, useState } from "react";
import { Container, Title } from "@mantine/core";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import "./Projects.css";
import ProjectCard from "../ProjectCard/ProjectCard";
import LoliPreview from "../images/LoliPreview.png";
import wtwrPreview from "../images/wtwrPreview.png";
import usPreview from "../images/usPreview.png";
import portfolio from "../images/portfolio.jpg";

const projects = [
  {
    title: "Loli B Bakery",
    description:
      "Built a full-stack bakery shop where users can battle cart chaos with secure JWT login, level up their orders, and conquer checkout with ease.",
    tech: "Full Stack",
    image: LoliPreview,
    github: "https://github.com/MrWatson0531/Loli-B-Bakery",
  },
  {
    title: "WTWR",
    description:
      "Your personal weather oracle: WTWR suggests optimal outfits to conquer any weather challenge, powered by live climate data.",
    tech: "Full Stack",
    image: wtwrPreview,
    github: "https://github.com/MrWatson0531/se_project_react  ",
  },
  {
    title: "Around the US",
    description:
      "Set sail with Jacques Cousteau! An interactive journey across the US showcasing exploration, multimedia adventures, and interactive maps.",
    tech: "UI / UX",
    image: usPreview,
    github: "https://github.com/MrWatson0531/se_project_aroundtheus",
  },
  {
    title: "TripleTen Library",
    description:
      "Take flight with TripleTen Library: an interactive web experience honoring pioneering women aviators, complete with dynamic profiles and immersive design.",
    tech: "UI / UX",
    image: "",
    github: "",
  },
  {
    title: "TripleTen Coffee Shop",
    description:
      "Brew brilliance with TripleTen Coffee Shop: a sleek, user-friendly web app that serves up seamless browsing, embedded recipe video, and a rich coffee experience.",
    tech: "UI / UX",
    image: "",
    github: "",
  },
  {
    title: "Portfolio Website",
    description:
      "Crafted a dynamic portfolio website showcasing my skills, projects, and contact info with a sleek design and smooth user experience.",
    tech: "UI / UX",
    image: portfolio,
    github: "https://github.com/MrWatson0531/mwatson-portfolio",
  },
];

export default function Projects() {
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
