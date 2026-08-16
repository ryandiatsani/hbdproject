"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type Flower = {
  emoji: string;
  name: string;
  message: string;
  x: string;
  y: string;
  delay: string;
};

const flowers: Flower[] = [
  {
    emoji: "🌹",
    name: "A rose",
    message:
      "For someone who became a meaningful part of my life in ways I never expected.",
    x: "18%",
    y: "25%",
    delay: "0s",
  },
  {
    emoji: "🌷",
    name: "A tulip",
    message:
      "For all the little conversations and moments that I genuinely enjoy having with you.",
    x: "38%",
    y: "12%",
    delay: "0.4s",
  },
  {
    emoji: "🌼",
    name: "A little flower",
    message:
      "For the simple things. Sometimes they are the things I remember the most.",
    x: "58%",
    y: "20%",
    delay: "0.8s",
  },
  {
    emoji: "🌻",
    name: "A sunflower",
    message:
      "For your strength. You are stronger than you probably realize.",
    x: "73%",
    y: "30%",
    delay: "1.2s",
  },
  {
    emoji: "🌸",
    name: "A cherry blossom",
    message:
      "For new beginnings. I am glad that we can talk again, without rushing anything.",
    x: "42%",
    y: "32%",
    delay: "1.6s",
  },
];

export default function BouquetPage() {
  const router = useRouter();

  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState<Flower | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen overflow-hidden bg-gradient-to-br from-rose-100 via-pink-50 to-purple-100 relative">

      {/* Soft background */}

      <div className="absolute -top-32 -left-32 w-72 h-72 rounded-full bg-pink-300/30 blur-3xl" />

      <div className="absolute -bottom-32 -right-32 w-72 h-72 rounded-full bg-purple-300/30 blur-3xl" />

      {/* Floating petals */}

      <div className="absolute inset-0 pointer-events-none overflow-hidden">

        <span className="falling left-[10%]">🌸</span>
        <span className="falling left-[30%]">🌸</span>
        <span className="falling left-[50%]">🌸</span>
        <span className="falling left-[70%]">🌸</span>
        <span className="falling left-[90%]">🌸</span>

      </div>

      {/* Content */}

      <section className="relative z-10 min-h-screen flex flex-col items-center justify-center px-5">

        <div
          className={`text-center transition-all duration-1000 ${
            visible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6"
          }`}
        >

          <p className="text-xs tracking-[0.35em] uppercase text-rose-400 mb-3">
            From far away
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-rose-500">
            A Bouquet For You
          </h1>

          <p className="mt-4 text-gray-500 max-w-md leading-relaxed">
            I know flowers are one of the things you like.
            So even though I cannot hand you a real bouquet,
            I wanted to make one for you.
          </p>

        </div>

        {/* Bouquet */}

        <div className="relative w-[340px] h-[430px] mt-4">

          {/* Stems */}

          <div className="absolute left-[48%] top-[35%] w-1 h-[220px] bg-green-600 rounded-full rotate-[-8deg]" />

          <div className="absolute left-[38%] top-[35%] w-1 h-[220px] bg-green-600 rounded-full rotate-[-20deg]" />

          <div className="absolute left-[60%] top-[35%] w-1 h-[220px] bg-green-600 rounded-full rotate-[15deg]" />

          <div className="absolute left-[28%] top-[40%] w-1 h-[200px] bg-green-600 rounded-full rotate-[-30deg]" />

          <div className="absolute left-[70%] top-[40%] w-1 h-[200px] bg-green-600 rounded-full rotate-[25deg]" />

          {/* Leaves */}

          <div className="absolute left-[27%] top-[65%] w-16 h-6 bg-green-500 rounded-full rotate-[-30deg]" />

          <div className="absolute right-[25%] top-[68%] w-16 h-6 bg-green-500 rounded-full rotate-[30deg]" />

          <div className="absolute left-[38%] top-[72%] w-14 h-5 bg-green-600 rounded-full rotate-[-20deg]" />

          <div className="absolute right-[38%] top-[74%] w-14 h-5 bg-green-600 rounded-full rotate-[20deg]" />

          {/* Flowers */}

          {flowers.map((flower) => (
            <button
              key={flower.name}
              type="button"
              onClick={() => setSelected(flower)}
              className={`absolute text-6xl md:text-7xl transition-all duration-1000 hover:scale-125 active:scale-95 flower-float ${
                visible
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-50"
              }`}
              style={{
                left: flower.x,
                top: flower.y,
                animationDelay: flower.delay,
              }}
              aria-label={flower.name}
            >
              {flower.emoji}
            </button>
          ))}

          {/* Bouquet paper */}

          <div className="absolute bottom-2 left-1/2 -translate-x-1/2">

            <div className="w-[290px] h-[150px] bg-gradient-to-br from-pink-200 to-rose-300 shadow-xl rotate-2 clip-paper" />

            <div className="absolute top-[48%] left-0 w-full h-6 bg-rose-400/80" />

            <div className="absolute top-[38%] left-1/2 -translate-x-1/2 text-3xl">
              🎀
            </div>

          </div>

        </div>

        <p className="text-sm text-gray-400 animate-pulse">
          Click a flower to see something 🌸
        </p>

        {/* <button
          type="button"
          onClick={() => router.push("/letter")}
          className="mt-6 px-7 py-3 rounded-full bg-rose-400 text-white font-semibold shadow-lg hover:bg-rose-500 transition active:scale-95"
        >
          Continue 💌
        </button> */}

      </section>

      {/* Flower message */}

      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-sm px-5"
          onClick={() => setSelected(null)}
        >

          <div
            className="bg-white rounded-3xl p-8 max-w-md w-full text-center shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >

            <div className="text-7xl mb-5">
              {selected.emoji}
            </div>

            <h2 className="text-2xl font-bold text-rose-500">
              {selected.name}
            </h2>

            <p className="mt-4 text-gray-600 leading-relaxed">
              {selected.message}
            </p>

            <button
              type="button"
              onClick={() => setSelected(null)}
              className="mt-6 px-6 py-3 rounded-full bg-rose-400 text-white font-semibold"
            >
              Keep it 🌷
            </button>

          </div>

        </div>
      )}

      <style jsx>{`

        .flower-float {
          animation: float 4s ease-in-out infinite;
        }

        .falling {
          position: absolute;
          top: -40px;
          font-size: 20px;
          opacity: 0.4;
          animation: fall 10s linear infinite;
        }

        .falling:nth-child(2) {
          animation-delay: 2s;
        }

        .falling:nth-child(3) {
          animation-delay: 4s;
        }

        .falling:nth-child(4) {
          animation-delay: 1s;
        }

        .falling:nth-child(5) {
          animation-delay: 6s;
        }

        .clip-paper {
          clip-path: polygon(
            8% 0%,
            92% 0%,
            100% 100%,
            0% 100%
          );
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0) rotate(-2deg);
          }

          50% {
            transform: translateY(-8px) rotate(2deg);
          }
        }

        @keyframes fall {
          0% {
            transform: translateY(-40px) rotate(0deg);
            opacity: 0;
          }

          10% {
            opacity: 0.4;
          }

          100% {
            transform: translateY(110vh) rotate(360deg);
            opacity: 0;
          }
        }

      `}</style>

    </main>
  );
}