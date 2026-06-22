"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function MessagePage() {
  const router = useRouter();

  const fullText =
    "สวัสดี Tián... ฉันไม่รู้จะเริ่มยังไงดี แต่แค่อยากบอกว่า ขอบคุณที่มีอยู่ในโลกนี้นะ เธอทำให้เรื่องธรรมดากลายเป็นเรื่องที่อบอุ่นขึ้น และทำให้วันธรรมดาดูดีขึ้นเสมอ ฉันหวังว่าวันนี้จะเต็มไปด้วยความสุขเล็ก ๆ น้อย ๆ ที่เธอเคยมอบให้คนอื่น สุขสันต์วันเกิดนะ 💖";

  const [text, setText] = useState("");

  useEffect(() => {
    let i = 0;

    const interval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;

      if (i > fullText.length) {
        clearInterval(interval);
      }
    }, 40);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-200 via-pink-200 to-rose-200 relative overflow-hidden px-6">
      
      {/* floating hearts */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute text-pink-400 text-2xl animate-bounce top-10 left-10">💖</div>
        <div className="absolute text-pink-300 text-xl animate-pulse top-20 right-20">💗</div>
        <div className="absolute text-pink-400 text-3xl animate-bounce bottom-20 left-1/4">💞</div>
        <div className="absolute text-pink-300 text-2xl animate-pulse bottom-10 right-1/3">💘</div>
      </div>

      {/* message card */}
      <div className="max-w-2xl bg-white/60 backdrop-blur-md border border-white/40 shadow-2xl rounded-2xl p-8 text-center">
        
        <h1 className="text-3xl font-bold text-pink-600 mb-6">
          💌 ข้อความสำหรับเธอ
        </h1>

        <p className="text-gray-700 text-lg leading-relaxed min-h-[150px]">
          {text}
          <span className="animate-pulse">|</span>
        </p>

        {text === fullText && (
          <button
            onClick={() => router.push("/memories")}
            className="mt-8 px-6 py-3 rounded-full bg-pink-500 text-white font-semibold hover:bg-pink-600 active:scale-95 transition"
          >
            ดูความทรงจำ 📸
          </button>
        )}
      </div>
    </div>
  );
}