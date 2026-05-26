import { motion } from "framer-motion";
import { Play, Sparkles } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-5 overflow-hidden bg-[#09090b] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#1db95433,transparent_35%),radial-gradient(circle_at_bottom_right,#ff4d8833,transparent_30%)]" />

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-4xl text-center"
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 mb-6">
          <Sparkles size={16} />
          FOR YOU, WITH LOVE
        </div>

        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          Sayangkuuuu
          <span className="block text-[#1DB954]">
            Natasya Veirayesa
          </span>
        </h1>

        <p className="mt-6 text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
          Sebenarnya aku mau ngasih kado tapi kayanya pasti bakal kamu tolak,
          makanya aku buatin website ini aja buat hadiah anniversary kita.
        </p>

        <div className="mt-10 flex justify-center">
          <a
            href="#music-player"
            className="
              rounded-full
              bg-[#1DB954]
              px-8
              py-4
              font-semibold
              text-black
              hover:scale-105
              transition
              flex
              items-center
              gap-2
              shadow-[0_0_40px_rgba(29,185,84,0.35)]
            "
          >
            <Play size={18} />
            Klik ini sayangku
          </a>
        </div>
      </motion.div>
    </section>
  );
}