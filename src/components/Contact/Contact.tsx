import { motion } from "framer-motion";
import "./Contact.css";
import { fadeUp, staggerContainer } from "../../utils/animation";

export default function Contact() {
  return (
    <motion.section
      id="contact"
      className="contact"
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
    >
      <motion.h2 variants={fadeUp}>Let’s Work Together</motion.h2>
      <motion.p variants={fadeUp}>Choose the channel that works best for you.</motion.p>

      <motion.div className="contact-actions" variants={fadeUp}>
        <a
          href="https://cal.com/your-username"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-btn call"
        >
          Book a Call
        </a>
        <a
          href="https://wa.me/234xxxxxxxxxx"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-btn whatsapp"
        >
          WhatsApp
        </a>
        <a href="mailto:youremail@example.com" className="contact-btn email">
          Send Email
        </a>
      </motion.div>
    </motion.section>
  );
}



