"use client";

import { useRouter } from "next/navigation";

export default function MemoriesPage() {
  const router = useRouter();

  const images = [
    "/memories/1.jpg",
    "/memories/2.jpg",
    "/memories/3.jpg",
    "/memories/4.jpg",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-rose-100 px-6 py-10 relative overflow-hidden">
      
      {/* floating soft hearts */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 text-pink-300 text-2xl animate-bounce">💖</div>
        <div className="absolute top-20 right-16 text-pink-400 text-xl animate-pulse">💗</div>
        <div className="absolute bottom-20 left-1/4 text-pink-300 text-3xl animate-bounce">💞</div>
        <div className="absolute bottom-10 right-1/3 text-pink-400 text-2xl animate-pulse">💘</div>
      </div>

      {/* title */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-pink-600">
          📸 ขอบคุณสำหรับช่วงเวลาพวกนี้นะ
        </h1>
        <p className="text-gray-600 mt-2">
          ทุกภาพที่เธอส่งมา ทำให้ฉันยิ้มได้เลย 💖
        </p>
      </div>

      {/* gallery */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
        {images.map((src, index) => (
          <div
            key={index}
            className="rounded-2xl overflow-hidden shadow-lg bg-white/60 backdrop-blur-md border border-white/40 hover:scale-105 transition duration-300"
          >
            <img
              src={src}
              alt={`memory-${index}`}
              className="w-full h-48 object-cover"
            />
          </div>
        ))}
      </div>

      {/* thank you message */}
      <div className="max-w-2xl mx-auto mt-10 text-center bg-white/60 backdrop-blur-md border border-white/40 shadow-xl rounded-2xl p-6">
        <h2 className="text-2xl font-semibold text-pink-600 mb-3">
          💌 Thank You
        </h2>

        <p className="text-gray-700 leading-relaxed">
          ทุกภาพที่เธอส่งมา มันไม่ใช่แค่รูปนะ…  
          แต่มันเป็นความรู้สึกที่ทำให้ฉันยิ้มได้ในวันธรรมดา ๆ  
          ขอบคุณที่แบ่งปันช่วงเวลาพวกนี้ให้ฉันนะ Tián 💖
        </p>

        <button
          onClick={() => router.push("/surprise")}
          className="mt-6 px-6 py-3 rounded-full bg-pink-500 text-white font-semibold hover:bg-pink-600 active:scale-95 transition"
        >
          Final Surprise 🎁
        </button>
      </div>
    </div>
  );
}