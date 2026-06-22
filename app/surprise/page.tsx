"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import confetti from "canvas-confetti";

export default function SurprisePage() {
  const router = useRouter();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);

      confetti({
        particleCount: 200,
        spread: 100,
        origin: { y: 0.6 },
      });
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-200 via-purple-200 to-indigo-200 px-6 relative overflow-hidden">
      
      {/* background glow */}
      <div className="absolute w-96 h-96 bg-pink-300 blur-3xl opacity-30 rounded-full top-10 left-10 animate-pulse" />
      <div className="absolute w-96 h-96 bg-purple-300 blur-3xl opacity-30 rounded-full bottom-10 right-10 animate-pulse" />

      <div className="text-center max-w-2xl bg-white/60 backdrop-blur-md border border-white/40 shadow-2xl rounded-2xl p-10">

        {!show ? (
          <p className="text-gray-600 text-lg animate-pulse">...</p>
        ) : (
          <>
            <h1 className="text-4xl font-bold text-pink-600 mb-6">
              🎂 สุขสันต์วันเกิดนะ Tián
            </h1>

            <p className="text-gray-700 leading-relaxed text-lg mb-6">
              ฉันไม่รู้ว่าข้างหน้าจะเป็นยังไง  
              แต่ฉันดีใจมากที่มีเธออยู่ในโลกของฉัน—even แค่ช่วงเวลาสั้น ๆ ก็ตาม 💖
              <br /><br />
              ขอบคุณสำหรับทุก ๆ รอยยิ้มที่เธอเคยให้ โดยที่เธออาจไม่รู้ตัวเลย
            </p>

            <p className="text-pink-600 font-semibold text-xl mb-8">
              เธอเป็นคนที่พิเศษมากจริง ๆ
            </p>

            <button
              onClick={() => router.push("/")}
              className="px-6 py-3 rounded-full bg-pink-500 text-white font-semibold hover:bg-pink-600 active:scale-95 transition"
            >
              เล่นอีกครั้ง 🎁
            </button>
          </>
        )}
      </div>
    </div>
  );
}