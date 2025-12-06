import React from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center gap-10 p-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className="font-comic text-4xl text-brand-red drop-shadow-[2px_2px_0px_rgba(0,0,0,1)] stroke-black"
        style={{ WebkitTextStroke: "1px black" }}
      >
        NOTDOG
      </motion.div>

      <div className="hidden md:flex gap-14">
        {["About", "Tokenomics", "Roadmap"].map((item, i) => (
          <motion.a
            key={item}
            href={`#${item.toLowerCase()}`}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ scale: 1.1, rotate: [-2, 2, -1, 1, 0] }}
            className="font-marker text-xl text-black hover:text-brand-blue transition-colors relative"
          >
            {item}
          </motion.a>
        ))}
      </div>

      <motion.button
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="z-50 bg-black text-white px-6 py-2 rounded-full font-comic text-xl border-2 border-white shadow-[4px_4px_0px_0px_#E53935]"
      >
        BUY NOW
      </motion.button>
    </nav>
  );
};

export default Navbar;
