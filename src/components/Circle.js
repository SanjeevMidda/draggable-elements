import React from "react";
import { motion } from "framer-motion";

const Circle = ({ color }) => {
  let styles = {
    backgroundColor: color,
    width: "50px",
    height: "50px",
    borderRadius: "50%",
  };

  console.log(color);
  return <motion.div className="circle" style={styles} drag></motion.div>;
};

export default Circle;
