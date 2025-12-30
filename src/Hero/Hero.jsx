import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero max-w-screen--xl mx-auto">
      <div className="hero__content">
        <h1 className="hero__title">
          PLAYER ONE
          <span className="hero__name">Mike Watson</span>
        </h1>
        <h2 className="hero__role">Full Stack Developer</h2>
        <p className="hero__description">
          Building fast, scaleable, and secure web applications with clean code
          and boss-level design.
        </p>
        <div className="hero__actions">
          <Link to="/Skills" className="hero__btn">
            START GAME
          </Link>
        </div>
      </div>
    </section>
  );
}
