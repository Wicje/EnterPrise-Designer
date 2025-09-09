import React, { useState } from "react";
import { motion } from "framer-motion";
import { PORTFOLIO } from "../data/portfolio";
import { fadeUp, staggerContainer, cardHover } from "../utils/animation";
import PortfolioModal from "./PortfolioModal";
import type { PortfolioItem } from "../types/portfolio";

export const Portfolio: React.FC = () => {
  const [selected, setSelected] = useState<PortfolioItem | null>(null);

  return (
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
            <img src={p.img[0]} alt={p.title} />
            <h4>{p.title}</h4>
            <p className="muted">{p.desc}</p>

            {/* Instead of link, open modal */}
            <button
              className="link"
              onClick={() => setSelected(p)}
              style={{ background: "none", border: "none", cursor: "pointer" }}
            >
              View case study →
            </button>
          </motion.div>
        ))}
      </motion.div>

      {/* Modal */}
      {selected && <PortfolioModal item={selected} onClose={() => setSelected(null)} />}
    </section>
  );
};

