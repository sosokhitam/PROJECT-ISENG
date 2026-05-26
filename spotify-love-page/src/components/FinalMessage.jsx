import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function FinalMessage() {
  return (
    <section
      id="final"
      className="relative bg-[#09090b] px-5 py-24 text-white overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#ff4d8833,transparent_35%)]" />

      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative z-10 max-w-4xl mx-auto text-center"
      >
        <p className="text-[#1DB954] font-semibold mb-4">Final Message</p>

        <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          Distance exists, but so does us.
        </h2>

        <p className="text-white/70 text-lg leading-relaxed">
          Selamat anniversary sayangggkuuuu. maaf ya kita belum bisa ketemu terus ngelakuin semua wish list yang udah kita buat. jangan pernah bosan sama aku yaa sayangg.
          I love you so much, and I can't wait for all the memories we'll create together in the future. Terima kasih sudah jadi bagian terbaik dalam hidup aku, walaupun kita berjauhan. Semoga kita bisa segera ketemu dan ngerayain anniversary kita dengan cara yang paling spesial. Aku sayang kamu banget, Natasya Veirayesa.
        </p>

        <div className="mt-10 inline-flex items-center gap-2 rounded-full bg-white text-black px-7 py-4 font-bold">
          <Heart fill="black" />
          Happy Anniversary
        </div>
      </motion.div>
    </section>
  );
}