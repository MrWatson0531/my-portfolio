import React from "react";
import { Container, Title, Text, Button, Stack } from "@mantine/core";
import { motion } from "framer-motion";
import "./Hero.css";

export default function Hero() {
  return (
    <Container className="hero__container">
      <Stack spacing="md" align="center">
        {/* Headline */}
        <motion.div
          className="hero__title"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 order={1}>Mike Watson</h1>
        </motion.div>
        {/*Subtitle */}
        <motion.div
          className="hero__subtitle"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          <Text size="x1" weight={500}>
            Full Stack Developer - I craft interactive web experiences with
            modern design.
          </Text>
        </motion.div>
        {/*Hero Button*/}
        <motion.div
          className="hero__button"
          initial={{ opacity: 0, scale: 0.0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          <Button
            size="1g"
            radius="x1"
            variant="gradient"
            gradient={{ from: "indigo", to: "cyan" }}
          >
            Explore My Work
          </Button>
        </motion.div>
      </Stack>
    </Container>
  );
}
