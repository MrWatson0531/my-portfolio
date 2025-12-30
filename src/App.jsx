import React from "react";
import  { Routes, Route } from "react-router";
import Hero from "./Hero/Hero";
import OrbitSkills from "./OrbitSkills/OrbitSkills";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";
import { MantineProvider, Container } from "@mantine/core";

export default function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Container size="md" py="xl" className="App__container">
        <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/Skills" element={<><OrbitSkills /><Projects /><Contact /></>} />
        </Routes>
      </Container>
    </MantineProvider>
  );
}
 