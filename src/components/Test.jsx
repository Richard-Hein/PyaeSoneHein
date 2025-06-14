import { motion } from "framer-motion";
import { SiJavascript } from "react-icons/si";

const BouncingIcon = () => {
  return (
    <motion.div
      animate={{ y: [0, -20, 0] }} // bounce up then down
      transition={{
        duration: 1,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
      }}
      className="text-yellow-300 text-[5rem] absolute bottom-0 right-0"
    >
      <SiJavascript />
    </motion.div>
  );
};

export default BouncingIcon;
