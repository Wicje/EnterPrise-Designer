import React from "react";
import { motion } from "framer-motion";
import { PORTFOLIO } from "../data/portfolio";
import { fadeUp, staggerContainer, cardHover } from "../utils/animation";

export const Portfolio: React.FC = () => (
  <section id="portfolio" className="container" aria-labelledby="portfolio-heading">
    <h2 id="portfolio-heading">Selected Work</h2>
    <p className="muted">Case studies and identity systems for enterprise clients.</p>

    <motion.div
      className="grid portfolio-grid"
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
    >
      {PORTFOLIO.map((p) => (
        <motion.div
          key={p.id}
          className="card portfolio-card"
          variants={fadeUp}
          whileHover={{ y: -8, ...cardHover }}
          transition={{ duration: 0.35 }}
        >
          {/* replace images in public/ with real captures */}
          <img src={p.img[0]} alt={p.title} />
          <h4>{p.title}</h4>
          <p className="muted">{p.desc}</p>
          <a className="link" href="#">
            View case study →
          </a>
        </motion.div>
      ))}
    </motion.div>
  </section>
);


