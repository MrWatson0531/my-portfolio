import React from "react";
import { Container, Title, Tooltip } from "@mantine/core";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaDatabase, FaJsSquare } from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiHtml5,
  SiCss3,
  SiFigma,
  SiPostgresql,
} from "react-icons/si";
import "./OrbitSkills.css";

export default function OrbitSkills() {
  const skills = [
    { icon: <FaReact />, label: "React" },
    { icon: <FaNodeJs />, label: "Node.js" },
    { icon: <FaDatabase />, label: "SQL" },
    { icon: <FaJsSquare />, label: "JavaScript" },
    { icon: <SiMongodb />, label: "MongoDB" },
    { icon: <SiExpress />, label: "Express.js" },
    { icon: <SiHtml5 />, label: "HTML5" },
    { icon: <SiCss3 />, label: "CSS" },
    { icon: <SiFigma />, label: "Figma" },
    { icon: <SiPostgresql />, label: "PostgreSQL" },
  ];

  return (
    <Container className="orbit-container">
      <h2 className="orbit-title">My Skills Galaxy</h2>
      <div className="orbit-center-glow" />

      <motion.div
        className="orbit-wrapper"
        viewport={{ once: true }}
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.div
          className="orbit-core"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        >
          <FaReact className="react-core" size={70} />
        </motion.div>
        {skills.map((skill, index) => (
          <Tooltip label={skill.label} key={index} position="bottom" withhArrow>
            <motion.div
              className={`orbit-item orbit-pos-${index}`}
              whileHover={{ scale: 1.3 }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
            >
              {skill.icon}
            </motion.div>
          </Tooltip>
        ))}
      </motion.div>
    </Container>
  );
}
