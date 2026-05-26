import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { chatMessages } from "../data/chats";


export default function ChatSection() {
  return (
    <section className="bg-[#09090b] px-5 py-20 text-white">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <MessageCircle className="text-[#1DB954]" />
          <h2 className="text-3xl md:text-4xl font-bold">
            walaupun kamu suka gini aku tetap sayang kamu
          </h2>
        </div>

        <div className="rounded-3xl border border-white/10 bg-[#121212] p-5 md:p-8 space-y-4">
          {chatMessages.map((message, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className={`flex ${
                message.from === "you" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-[80%] rounded-3xl px-5 py-3 ${
                  message.from === "you"
                    ? "bg-[#1DB954] text-black"
                    : "bg-white/10 text-white"
                }`}
              >
                {message.text}
              </div>
            </motion.div>
          ))}

          <div className="text-sm text-white/40 pt-3">typing...</div>
        </div>
      </div>
    </section>
  );
}