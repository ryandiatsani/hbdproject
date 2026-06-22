"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import confetti from "canvas-confetti";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // 🎉 burst confetti on load
    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.6 },
    });
  }, []);

  const handleEnter = () => {
    // small confetti before redirect
    confetti({
      particleCount: 80,
      spread: 60,
    });

    setTimeout(() => {
      router.push("/message");
    }, 500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-200 via-purple-200 to-indigo-200 relative overflow-hidden">
      
      {/* floating glow circles */}
      <div className="absolute w-72 h-72 bg-pink-300 rounded-full blur-3xl opacity-40 top-10 left-10 animate-pulse" />
      <div className="absolute w-72 h-72 bg-purple-300 rounded-full blur-3xl opacity-40 bottom-10 right-10 animate-pulse" />

      {/* main card */}
      <div className="text-center p-10 rounded-2xl bg-white/60 backdrop-blur-md shadow-2xl border border-white/40">
        
        <h1 className="text-4xl md:text-5xl font-bold text-pink-600 mb-4">
          🎂 Happy Birthday
        </h1>

        <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-6">
          Tián ✨ from Ryandi
        </h2>

        <p className="text-gray-600 mb-8">
          ฉันทำบางอย่างให้เธอ… หวังว่าเธอจะชอบนะ 💖
        </p>

        <button
          onClick={handleEnter}
          className="px-6 py-3 rounded-full bg-pink-500 text-white font-semibold hover:bg-pink-600 active:scale-95 transition"
        >
          Open Your Surprise 🎁
        </button>
      </div>
    </div>
  );
}