import { motion } from "framer-motion";
import foto from "./assets/AhmadNoor.png";

// Varian untuk container & item
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80 } },
};

// LinkCard
function LinkCard({ href, label }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      variants={item}
      className="block px-3 py-3 mb-3 max-w-[350px] rounded-xl text-center font-bold bg-[rgba(255,255,255,0.08)] backdrop-blur-sm border border-[rgba(255,255,255,0.2)] text-white shadow hover:scale-105 transition"
      whileHover={{
        scale: 1.05,
        boxShadow: "0px 0px 25px rgba(96,165,250,0.6)",
      }}
      whileTap={{ scale: 0.95 }}
    >
      {label}
    </motion.a>
  );
}

export default function App() {
  return (
    <div className="relative flex items-center justify-center min-h-screen w-full bg-gradient-to-br from-[#0f172a] to-[#1e1b4b]">
      {/* Glow background */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-pink-500 rounded-full blur-[120px] opacity-30 z-0"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full blur-[150px] opacity-25 z-0"></div>

      {/* Card besar */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="p-6 rounded-3xl w-80 text-center bg-[rgba(255,255,255,0.1)] backdrop-blur-xl border border-[rgba(255,255,255,0.2)] shadow-lg shadow-[#60a5fa]/30 relative"
      >
        {/* Avatar */}
        <motion.img
          src={foto}
          alt="AhmadNoor"
          variants={item}
          className="w-28 h-28 mx-auto rounded-full -mt-16 mb-1 shadow-gray-500/35 shadow-xl"
        />

        {/* Nama & bio */}
        <motion.h1
          variants={item}
          className="text-white font-bold"
        >
          Ahmad Noor
        </motion.h1>
        <motion.p
          variants={item}
          className="text-[#94a3b8] mb-3"
        >
          "Ngoding, eksperimen, bikin hal kecil jadi nyata 🚀"
        </motion.p>

        {/* LinkCard */}
        <LinkCard href="https://www.youtube.com/@Ahmad_Noor-PNPL" label="Youtube" />
        <LinkCard href="https://www.instagram.com/ahmad_noor0_0" label="Instagram" />
        <LinkCard href="https://tiktok.com" label="Tiktok" />
        <LinkCard href="https://github.com/ahmad-noor21" label="Github" />
        <LinkCard href="https://saweria.co/AhmadNoor" label="Saweria" />
      </motion.div>
    </div>
  );
}