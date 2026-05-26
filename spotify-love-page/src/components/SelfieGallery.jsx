import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const photos = [
  "/images/her1.jpg",
  "/images/her2.jpg",
  "/images/her3.jpg",
  "/images/her4.jpg",
];

export default function SelfieGallery() {
  return (
    <section className="relative bg-[#09090b] px-5 py-24 text-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#ff4d8822,transparent_30%)]" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#1DB954] font-semibold mb-3">
            because i love seeing your face, even if it's just through a screen
          </p>

          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            PAP Favorite akuuu
          </h2>

          <p className="mt-6 text-white/60 max-w-2xl mx-auto leading-relaxed">
            pap kamu semangat aku sayanggg
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12 }}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5"
            >
              <img
                src={photo}
                alt="Her"
                className="h-[420px] w-full object-cover transition duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-70" />

              <div className="absolute bottom-0 left-0 p-5">
                <div className="flex items-center gap-2 text-[#1DB954] mb-2">
                  <Heart size={16} fill="currentColor" />
                  <span className="text-sm">favorite person</span>
                </div>

                <p className="text-lg font-semibold">
                  
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}