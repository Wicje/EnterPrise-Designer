import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { PortfolioItem } from "../types/portfolio";
import "./../styles/PortfolioModal.css";

type PortfolioModalProps = {
  item: PortfolioItem | null; // null means closed
  onClose: () => void;
};

const backdrop = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const modal = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const PortfolioModal: React.FC<PortfolioModalProps> = ({ item, onClose }) => {
  return (
    <AnimatePresence>
      {item && (
        <motion.div
          className="modal-backdrop"
          initial="hidden"
          animate="show"
          exit="hidden"
          variants={backdrop}
          onClick={onClose}
        >
          <motion.div
            className="modal-content"
            variants={modal}
            onClick={(e) => e.stopPropagation()} // prevent closing on modal click
          >
            <button className="modal-close" onClick={onClose}>
              ✕
            </button>

            <h3>{item.title}</h3>
            <p className="muted">{item.desc}</p>

            <div className="modal-images">
              {item.img.map((src, idx) => (
                <img key={idx} src={src} alt={`${item.title} ${idx + 1}`} />
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PortfolioModal;

