import { useRef, useState } from "react";
import HeroSection from "./components/HeroSection";
import MusicPlayer from "./components/MusicPlayer";
import PlaylistSection from "./components/PlaylistSection";
import ChatSection from "./components/ChatSection";
import SelfieGallery from "./components/SelfieGallery";
import ReasonsSection from "./components/ReasonsSection";
import FinalMessage from "./components/FinalMessage";
import FloatingHearts from "./components/FloatingHearts";

export default function App() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <>
      <audio ref={audioRef} src="/audio/nothing.mp3" loop />

      <FloatingHearts />

      <HeroSection />

      <section id="music-player">
        <MusicPlayer
          audioRef={audioRef}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
        />
      </section>

      <PlaylistSection />
      <ChatSection />
      <SelfieGallery />
      <ReasonsSection />
      <FinalMessage />
    </>
  );
}