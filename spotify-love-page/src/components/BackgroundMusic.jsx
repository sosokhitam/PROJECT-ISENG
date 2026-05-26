import { useRef, useState } from "react";
import { Music, Pause, Play } from "lucide-react";

export default function BackgroundMusic() {
  const audioRef = useRef(null);
  const fadeIntervalRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleToggleMusic = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    clearInterval(fadeIntervalRef.current);

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
      return;
    }

    try {
      audio.volume = 0;
      await audio.play();

      let volume = 0;

      fadeIntervalRef.current = setInterval(() => {
        volume += 0.02;

        if (volume >= 0.35) {
          audio.volume = 0.35;
          clearInterval(fadeIntervalRef.current);
        } else {
          audio.volume = volume;
        }
      }, 120);

      setIsPlaying(true);
    } catch (error) {
      console.error("Audio gagal diputar:", error);
    }
  };

  return (
    <>
      <audio ref={audioRef} src="/audio/nothing.mp3" loop />

      <button
        onClick={handleToggleMusic}
        className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-[#1DB954] px-5 py-3 text-sm font-bold text-black shadow-2xl hover:scale-105 transition"
      >
        {isPlaying ? <Pause size={18} /> : <Play size={18} />}
        <Music size={18} />
        {isPlaying ? "Pause Music" : "Play Music"}
      </button>
    </>
  );
}