import React from "react";
import { motion } from "framer-motion";

const Modal = ({ selectedImg, setSelectedImg }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="backdrop"
      onClick={(e) => {
        if (!e.target.classList.contains("backdrop")) return;
        setSelectedImg(null);
      }}
    >
      <motion.img
        src={selectedImg}
        alt="enlarged pic"
        initial={{ y: "-50vh" }}
        animate={{ y: 0 }}
      />
    </motion.div>
  );
};

export default Modal;
