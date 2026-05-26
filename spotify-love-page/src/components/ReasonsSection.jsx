import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const reasons = [
  "Kamu suka banget makan wortel. (biasanya kalo belum makan wortel suka jutek)",
  "Kamu suka ngemilin es batu. (kalo diem biasanya pasti lagi ngemilin es batu)",
  "Kamu kalo lagi kangen biasanya suka nangis. (terus mikir aku ga sayang kamu)",
];

export default function ReasonsSection() {
  return (
    <section className="bg-[#09090b] px-5 py-24 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-[#1DB954] font-semibold mb-3">
            Little Things About You That I Love
          </p>

          <h2 className="text-4xl md:text-6xl font-bold">
            Little Things About You
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="rounded-3xl border border-white/10 bg-white/[0.05] p-6 hover:bg-[#1DB954]/10 transition"
            >
              <Heart className="text-[#1DB954] mb-5" fill="currentColor" />
              <p className="text-white/75 leading-relaxed">{reason}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}