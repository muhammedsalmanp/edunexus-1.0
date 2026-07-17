import { motion } from "framer-motion";

const BackgroundEffects = () => {
  return (
    <>
      {/* Blue Orb */}
      <motion.div
        className="
          absolute
          top-20
          left-10
          w-72
          h-72
          rounded-full
          bg-blue-400/20
          blur-3xl
        "
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
      />

      {/* Purple Orb */}
      <motion.div
        className="
          absolute
          right-10
          top-40
          w-80
          h-80
          rounded-full
          bg-purple-400/20
          blur-3xl
        "
        animate={{
          x: [0, -40, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
        }}
      />

      {/* Cyan Orb */}
      <motion.div
        className="
          absolute
          bottom-20
          left-1/2
          w-64
          h-64
          rounded-full
          bg-cyan-400/20
          blur-3xl
        "
        animate={{
          y: [0, -40, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
      />

      {/* Stars */}
      {Array.from({ length: 12 }).map((_, index) => (
        <motion.div
          key={index}
          className="absolute text-yellow-400 text-xl"
          style={{
            left: `${5 + index * 8}%`,
            top: `${10 + (index % 5) * 15}%`,
          }}
          animate={{
            opacity: [0.3, 1, 0.3],
            scale: [1, 1.4, 1],
          }}
          transition={{
            duration: 2 + index,
            repeat: Infinity,
          }}
        >
          ✨
        </motion.div>
      ))}
    </>
  );
};

export default BackgroundEffects;