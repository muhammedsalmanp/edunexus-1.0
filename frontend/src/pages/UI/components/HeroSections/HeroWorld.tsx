import { motion } from "framer-motion";

const HeroWorld = () => {
    
  return (
    <div className="relative h-[700px] flex items-center justify-center">

      {/* Glow */}
      <div className="absolute w-[450px] h-[450px] rounded-full bg-blue-300/30 blur-3xl" />

      {/* Main Student */}
      <motion.div
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
        className="
          relative
          z-10
          w-72
          h-72
          bg-white
          rounded-[40px]
          shadow-2xl
          flex
          items-center
          justify-center
          text-8xl
        "
      >
        👨‍🎓
      </motion.div>
      <motion.div
  animate={{
    y: [0, -15, 0],
    rotate: [0, 3, 0],
  }}
  transition={{
    duration: 5,
    repeat: Infinity,
  }}
  className="
    absolute
    top-20
    left-0
    bg-white
    rounded-3xl
    p-5
    shadow-xl
    w-60
  "
>
  <p className="text-blue-600 font-semibold">
    React Masterclass
  </p>

  <p className="text-gray-500">
    ⭐ 4.9 Rating
  </p>
</motion.div> 
<motion.div
  animate={{
    y: [0, -15, 0],
    rotate: [0, -3, 0],
  }}
  transition={{
    duration: 7,
    repeat: Infinity,
  }}
  className="
    absolute
    bottom-20
    right-10
    bg-white
    rounded-3xl
    p-5
    shadow-xl
  "
>
  🏆 Certificate Earned
</motion.div>


    </div>
  );
};

export default HeroWorld;