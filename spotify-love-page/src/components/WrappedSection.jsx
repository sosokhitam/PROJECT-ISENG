import { motion } from "framer-motion";
import { BarChart3, Clock3, Heart, MessageCircle } from "lucide-react";

const wrappedData = [
  {
    icon: <MessageCircle size={28} />,
    title: "Messages Sent",
    value: "5036",
    description: "Dalam setahun kita udah chatan sebanyak ini",
  },
  {
    icon: <Clock3 size={28} />,
    title: "Time Spent",
    value: " 8760 Hours",
    description: "ini total jam hubungan kita",
  },
  {
    icon: <Heart size={28} />,
    title: "Favorite Person",
    value: "You",
    description: "tetap jadi orang yang paling aku pilih.",
  },
  {
    icon: <BarChart3 size={28} />,
    title: "Best Memory",
    value: "Us",
    description: "semua hal kecil tentang kita selalu berharga.",
  },
];

export default function WrappedSection() {
  return (
    <section className="relative bg-[#09090b] px-5 py-24 text-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#1db95422,transparent_30%)]" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-[#1DB954] font-semibold mb-3">
            2026 Relationship Wrapped
          </p>

          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            Our Year Together
          </h2>

          <p className="mt-6 text-white/60 max-w-2xl mx-auto leading-relaxed">
            Sebuah rangkuman kecil tentang bagaimana dua orang asing bisa
            berubah menjadi tempat pulang satu sama lain, bahkan tanpa pernah
            bertemu.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {wrappedData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="rounded-3xl border border-white/10 bg-white/[0.05] p-8 backdrop-blur-xl hover:bg-white/[0.08] transition"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#1DB954] text-black flex items-center justify-center mb-6">
                {item.icon}
              </div>

              <p className="text-white/50 text-sm mb-2">
                {item.title}
              </p>

              <h3 className="text-4xl md:text-5xl font-bold mb-4">
                {item.value}
              </h3>

              <p className="text-white/70 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 rounded-[2rem] border border-white/10 bg-gradient-to-r from-[#1DB954]/20 to-[#ff4d88]/20 p-10 text-center"
        >
          <p className="text-white/50 text-sm mb-3">
            MOST PLAYED FEELING
          </p>

          <h3 className="text-5xl md:text-7xl font-black">
            Love.
          </h3>

          <p className="mt-5 text-white/70 max-w-2xl mx-auto leading-relaxed">
            Dari semua perasaan yang datang dan pergi tahun ini,
            kamu tetap jadi perasaan yang paling sering ingin aku ulang.
          </p>
        </motion.div>
      </div>
    </section>
  );
}