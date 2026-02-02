import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [80, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.4, 1]);

  return (
    <section ref={ref}>
      <motion.p style={{ y, opacity }}>
        I build intelligent systems with restraint, clarity, and intent —
        focusing on how software feels, not just how it functions.
      </motion.p>
    </section>
  );
}
