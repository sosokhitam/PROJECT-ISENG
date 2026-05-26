import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Music2 } from "lucide-react";
import { memories } from "../data/memories";



export default function PlaylistSection() {
  const [selectedMemory, setSelectedMemory] = useState(memories[0]);

  return (
    <section id="playlist" className="bg-[#09090b] px-5 py-20 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <Music2 className="text-[#1DB954]" />
          <h2 className="text-3xl md:text-4xl font-bold">
            Playlist Memories
          </h2>
        </div>

        <div className="grid lg:grid-cols-[1fr_1fr] gap-8">
          <div className="rounded-3xl border border-white/10 bg-white/[0.06] overflow-hidden">
            {memories.map((memory, index) => (
              <button
                key={memory.id}
                onClick={() => setSelectedMemory(memory)}
                className={`w-full grid grid-cols-[40px_1fr_60px] gap-4 items-center px-5 py-4 text-left transition ${
                  selectedMemory.id === memory.id
                    ? "bg-[#1DB954]/20"
                    : "hover:bg-white/10"
                }`}
              >
                <span className="text-white/50">{index + 1}</span>

                <span>
                  <span className="block font-semibold">{memory.title}</span>
                  <span className="block text-sm text-white/50">
                    {memory.subtitle}
                  </span>
                </span>

                <span className="text-sm text-white/50">
                  {memory.duration}
                </span>
              </button>
            ))}
          </div>

          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.03] p-6 min-h-[320px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedMemory.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-[#1DB954] text-sm font-semibold mb-3">
                  {selectedMemory.mood}
                </p>

                <h3 className="text-4xl font-bold mb-4">
                  {selectedMemory.title}
                </h3>

                <p className="text-white/70 leading-relaxed text-lg">
                  {selectedMemory.text}
                </p>

                <div className="mt-8 rounded-2xl bg-black/30 border border-white/10 p-5">
                  <p className="text-white/50 text-sm mb-2">
                    Now playing message
                  </p>
                  <p className="text-xl">“{selectedMemory.message}”</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}