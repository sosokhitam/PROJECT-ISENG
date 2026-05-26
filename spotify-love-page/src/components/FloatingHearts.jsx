import { Heart } from "lucide-react";

const hearts = Array.from({ length: 18 });

export default function FloatingHearts() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((_, index) => (
        <Heart
          key={index}
          size={16 + (index % 4) * 6}
          className="absolute text-[#ff4d88]/30 animate-float"
          fill="currentColor"
          style={{
            left: `${(index * 17) % 100}%`,
            bottom: `-${20 + index * 8}px`,
            animationDelay: `${index * 0.8}s`,
            animationDuration: `${8 + (index % 5)}s`,
          }}
        />
      ))}
    </div>
  );
}