import React from "react";
import { Container, Title, Tooltip } from "@mantine/core";
import { color, motion } from "framer-motion";
import { FaReact, FaNodeJs, FaDatabase, FaJsSquare } from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiHtml5,
  SiCss3,
  SiFigma,
  SiPostgresql,
  SiPostman,
} from "react-icons/si";
import "./OrbitSkills.css";
import profileImg from "../images/hero.jpg";

export default function OrbitSkills() {
  const skills = [
    { icon: <FaReact />, name: "React", value:97, color: "#61DAFB" },
    { icon: <FaNodeJs />, name: "Node.js", value:95,  color:"#339933" },
    { icon: <FaDatabase />, name: "SQL", value:97, color: "#336791" },
    { icon: <FaJsSquare />, name: "JavaScript", value:98, color: "#F7DF1E" },
    { icon: <SiMongodb />, name: "MongoDB", value:99, color: "#47A248" },
    { icon: <SiExpress />, name: "Express.js", value:96, color: "#000000" },
    { icon: <SiHtml5 />, name: "HTML5", value:99, color: "#E34F26" },
    { icon: <SiCss3 />, name: "CSS", value:99, color: "#1572B6" },
    { icon: <SiFigma />, name: "Figma", value:98, color: "#F24E1E" },
    { icon: <SiPostman />, name: "Postman", value:96, color: "#FF6C37" },
  ];

  return (
       <div className="player-card">
          <div className="player-avatar">
            <img src={profileImg} alt="Your Name" href="#/hero" />
          </div>

          <div className="player-stats">
            <h3 className="stats-title">PLAYER STATS</h3>

            {skills.map((skill) => (
              <div className="stat" key={skill.name}>
                <div className="stat-label">
                  <span>
                    {skill.name}&nbsp;
                    {skill.icon}
                  </span>
                  <span>{skill.value}%</span>
                </div>
                <div className="stat-bar">
                  <div
                    className="stat-fill"
                    style={{ width: `${skill.value}%`,
                      "--stat-color": skill.color,
                     }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
  );
}
