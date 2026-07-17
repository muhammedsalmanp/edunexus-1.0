import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookOpen,
  GraduationCap,
  Star,
  Brain,
  Atom,
  Award,
  Menu,
  X,
} from "lucide-react";

import logo from "../../../assets/logo.png";

const navItems = [
  "Home",
  "Courses",
  "Teachers",
  "About",
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
   <>
  <div className="absolute inset-0 bg-white/70 backdrop-blur-xl border-b border-white/20" />

  <motion.div
    className="absolute -left-20 -top-20 w-64 h-64 rounded-full bg-blue-500/20 blur-3xl"
    animate={{
      x: [0, 40, 0],
      y: [0, -30, 0],
    }}
    transition={{
      duration: 10,
      repeat: Infinity,
    }}
  />

  <motion.div
    className="absolute right-0 top-0 w-56 h-56 rounded-full bg-purple-500/20 blur-3xl"
    animate={{
      x: [0, -40, 0],
      y: [0, 20, 0],
    }}
    transition={{
      duration: 12,
      repeat: Infinity,
    }}
  />
</>
    <motion.div
  className="absolute left-20 top-5 hidden lg:block"
  animate={{
    y: [0, -15, 0],
    rotate: [0, 8, 0],
  }}
  transition={{
    duration: 4,
    repeat: Infinity,
  }}
>
  <BookOpen size={28} className="text-blue-500" />
</motion.div>

<motion.div
  className="absolute left-1/3 top-3 hidden xl:block"
  animate={{
    y: [0, -10, 0],
    rotate: [0, 15, 0],
  }}
  transition={{
    duration: 6,
    repeat: Infinity,
  }}
>
  <Brain size={24} className="text-purple-500" />
</motion.div>

<motion.div
  className="absolute right-32 top-4 hidden lg:block"
  animate={{
    y: [0, -12, 0],
    rotate: [0, 10, 0],
  }}
  transition={{
    duration: 5,
    repeat: Infinity,
  }}
>
  <GraduationCap size={32} className="text-yellow-500" />
</motion.div>

<motion.div
  className="absolute right-80 top-3 hidden lg:block"
  animate={{
    scale: [1, 1.2, 1],
    rotate: [0, 180, 360],
  }}
  transition={{
    duration: 8,
    repeat: Infinity,
  }}
>
  <Star
    size={20}
    className="fill-yellow-400 text-yellow-400"
  />
</motion.div>

<motion.div
  className="absolute right-60 top-12 hidden xl:block"
  animate={{
    y: [0, -12, 0],
    rotate: [0, -10, 0],
  }}
  transition={{
    duration: 7,
    repeat: Infinity,
  }}
>
  <Atom size={26} className="text-cyan-500" />
</motion.div>

<motion.div
  className="absolute left-1/2 top-6 hidden xl:block"
  animate={{
    y: [0, -10, 0],
  }}
  transition={{
    duration: 5,
    repeat: Infinity,
  }}
>
  <Award size={22} className="text-orange-500" />
</motion.div>
      {/* Navbar */}
      <nav className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
      <motion.div
  whileHover={{
    scale: 1.05,
  }}
  className="cursor-pointer"
>
  <img
    src={logo}
    alt="Logo"
    className="h-14 md:h-16 w-auto object-contain"
  />
</motion.div>
        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <motion.li
              key={item}
              whileHover={{
                y: -3,
              }}
              className="relative group cursor-pointer"
            >
              <span className="font-medium text-slate-700">
                {item}
              </span>

              <span
                className="
                  absolute
                  left-0
                  -bottom-2
                  h-[3px]
                  w-0
                  bg-blue-600
                  rounded-full
                  transition-all
                  duration-300
                  group-hover:w-full
                "
              />
            </motion.li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <motion.button
          whileHover={{
            scale: 1.05,
            y: -3,
          }}
          whileTap={{
            scale: 0.95,
          }}
          className="
            hidden md:block
            px-6
            py-3
            rounded-2xl
            text-white
            font-semibold
            bg-gradient-to-r
            from-blue-600
            to-blue-500
            shadow-xl
            shadow-blue-500/30
          "
        >
          🚀 Get Started
        </motion.button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden"
        >
          {isOpen ? (
            <X size={28} />
          ) : (
            <Menu size={28} />
          )}
        </button>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/30 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                duration: 0.3,
              }}
              className="
                fixed
                top-0
                right-0
                w-72
                h-screen
                bg-white
                shadow-2xl
                md:hidden
                z-50
              "
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-10">
                  <h2 className="font-bold text-xl">
                    Menu
                  </h2>

                  <button
                    onClick={() => setIsOpen(false)}
                  >
                    <X size={24} />
                  </button>
                </div>

                <div className="flex flex-col gap-6">
                  {navItems.map((item) => (
                    <a
                      key={item}
                      href="#"
                      onClick={() => setIsOpen(false)}
                      className="
                        text-lg
                        font-medium
                        text-slate-700
                        hover:text-blue-600
                        transition
                      "
                    >
                      {item}
                    </a>
                  ))}

                  <button
                    className="
                      mt-6
                      w-full
                      py-3
                      rounded-xl
                      bg-gradient-to-r
                      from-blue-600
                      to-blue-500
                      text-white
                      font-semibold
                    "
                  >
                    🚀 Get Started
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;