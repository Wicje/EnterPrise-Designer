import { motion } from "framer-motion";
import "./Hero.css";
import { fadeUp, staggerContainer } from "../../utils/animation";

export default function Hero() {
  return (
    <section className="hero-wrapper">
      {/* Headline ABOVE image */}
      <motion.h1
        className="hero-title"
        variants={fadeUp}
        initial="hidden"
        animate="show"
      >
        Enterprise-grade brand identities
      </motion.h1>

      {/* Hero image with overlay text */}
      <motion.section
        className="hero"
        variants={staggerContainer}
        initial="hidden"
        animate="show"
      >
        <motion.img
          src="/Hero.jpg"
          alt="Hero visual"
          className="hero-bg"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />

        <div className="hero-content">
          <motion.p variants={fadeUp}>
            We design scalable systems for global companies and ambitious startups.
          </motion.p>
        </div>
      </motion.section>
    </section>
  );
}

