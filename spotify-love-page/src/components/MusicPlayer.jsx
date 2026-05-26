import { motion } from "framer-motion";
import { Heart, Pause, Play, SkipBack, SkipForward } from "lucide-react";

export default function MusicPlayer({ audioRef, isPlaying, setIsPlaying }) {
  const handleToggleMusic = async () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.volume = 0.35;
      await audioRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <section className="bg-[#09090b] px-5 py-20 text-white">
      <div className="max-w-5xl mx-auto">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-2xl">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="flex justify-center">
              <motion.div
                animate={{ rotate: isPlaying ? 360 : 0 }}
                transition={{
                  repeat: isPlaying ? Infinity : 0,
                  duration: 10,
                  ease: "linear",
                }}
                className="w-72 h-72 rounded-full border-[18px] border-black bg-gradient-to-br from-[#1DB954] via-[#191414] to-[#ff4d88] shadow-2xl flex items-center justify-center"
              >
                <div className="w-24 h-24 rounded-full bg-[#1DB954] flex items-center justify-center">
                  <Heart className="text-black" fill="black" size={40} />
                </div>
              </motion.div>
            </div>

            <div>
              <p className="text-[#1DB954] font-semibold mb-3">Puter Musicnya Dulu Sayang, Biar Romantis</p>

              <h2 className="text-5xl font-bold leading-tight">Nothing</h2>

              <p className="mt-3 text-white/60 text-lg">Bruno Major</p>

              <p className="mt-6 text-white/70 leading-relaxed">
                Judul lagunya nothing, mirip dunia aku tanpa kamu eaksksksk
              </p>

              <div className="mt-8">
                <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                  <div className="h-full w-[65%] bg-[#1DB954]" />
                </div>

                <div className="mt-2 flex justify-between text-sm text-white/40">
                  <span>01:24</span>
                  <span>03:56</span>
                </div>
              </div>

              <div className="mt-8 flex items-center gap-6">
                <button className="text-white/60 hover:text-white transition">
                  <SkipBack size={28} />
                </button>

                <button
                  onClick={handleToggleMusic}
                  className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center hover:scale-105 transition"
                >
                  {isPlaying ? (
                    <Pause size={30} />
                  ) : (
                    <Play size={30} className="ml-1" />
                  )}
                </button>

                <button className="text-white/60 hover:text-white transition">
                  <SkipForward size={28} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}