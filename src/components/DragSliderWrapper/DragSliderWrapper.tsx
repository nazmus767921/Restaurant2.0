import { motion } from "framer-motion";
import React, { useRef } from "react";

const DragSliderWrapper = ({ children }: { children: React.ReactNode }) => {
  const constraintsRef = useRef(null);

  return (
    <motion.div
      ref={constraintsRef}
      style={{
        width: "100vw",
        overflow: "hidden",
      }}
    >
      <motion.div
        drag="x"
        dragConstraints={constraintsRef}
        style={{
          width: "max-content",
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};
export default DragSliderWrapper;
