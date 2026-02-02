import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section>
      <motion.h1
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4 }}
      >
        T Nikhil Kumar Reddy
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Aspiring AI Expert · Software Developer · CSE (AI)
      </motion.p>
    </section>
  );
}
