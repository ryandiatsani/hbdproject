"use client";

import { useEffect, useState } from "react";
import { Flower, Sparkles, Heart, X } from "lucide-react";

type FlowerData = {
  emoji: string;
  name: string;
  message: string;
  x: string;
  y: string;
  delay: string;
};

const flowers: FlowerData[] = [
  {
    emoji: "🌹",
    name: "A rose",
    message:
      "For someone who became a meaningful part of my life in ways I never expected.",
    x: "12%",
    y: "24%",
    delay: "0s",
  },
  {
    emoji: "🌷",
    name: "A tulip",
    message:
      "For all the little conversations and moments that I genuinely enjoy having with you.",
    x: "34%",
    y: "9%",
    delay: "0.4s",
  },
  {
    emoji: "🌼",
    name: "A little flower",
    message:
      "For the simple things. Sometimes they are the things I remember the most.",
    x: "55%",
    y: "16%",
    delay: "0.8s",
  },
  {
    emoji: "🌻",
    name: "A sunflower",
    message:
      "For your strength. You are stronger than you probably realize.",
    x: "68%",
    y: "27%",
    delay: "1.2s",
  },
  {
    emoji: "🌸",
    name: "A cherry blossom",
    message:
      "For new beginnings. I am glad that we can talk again, without rushing anything.",
    x: "38%",
    y: "29%",
    delay: "1.6s",
  },
  {
    emoji: "🌷",
    name: "Another tulip",
    message:
      "A little extra flower, because five flowers somehow did not feel like enough.",
    x: "20%",
    y: "39%",
    delay: "2s",
  },
  {
    emoji: "🌹",
    name: "A second rose",
    message:
      "Some flowers deserve a second place in the bouquet.",
    x: "59%",
    y: "39%",
    delay: "2.4s",
  },
];

export default function BouquetPage() {
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState<FlowerData | null>(null);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setVisible(true);
    }, 200);

    return () => {
      window.clearTimeout(timer);
    };
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#EAE3FF] via-[#DBCFFA] to-[#F4F1FF]">

      {/* Background */}

      <div className="pointer-events-none absolute -left-40 -top-40 h-[30rem] w-[30rem] rounded-full bg-[#BFA9F5]/30 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-40 -right-40 h-[30rem] w-[30rem] rounded-full bg-[#A991E8]/25 blur-3xl" />

      <div className="pointer-events-none absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-white/30 blur-3xl" />

      {/* Falling petals */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <span className="falling absolute left-[8%] text-xl">
          🌸
        </span>

        <span className="falling absolute left-[28%] text-xl [animation-delay:2s]">
          🌸
        </span>

        <span className="falling absolute left-[50%] text-xl [animation-delay:4s]">
          🌸
        </span>

        <span className="falling absolute left-[72%] text-xl [animation-delay:1s]">
          🌸
        </span>

        <span className="falling absolute left-[90%] text-xl [animation-delay:6s]">
          🌸
        </span>
      </div>

      {/* Decorative sparkles */}

      <Sparkles
        className="absolute left-[15%] top-[22%] h-5 w-5 animate-pulse text-yellow-300/70"
      />

      <Sparkles
        className="absolute right-[15%] top-[28%] h-6 w-6 animate-pulse text-[#9B7DE0]/60"
      />

      <Sparkles
        className="absolute bottom-[25%] left-[20%] h-4 w-4 animate-pulse text-[#A991E8]/60"
      />

      <Sparkles
        className="absolute bottom-[20%] right-[20%] h-4 w-4 animate-pulse text-yellow-300/60"
      />

      {/* Main content */}

      <section className="relative z-10 flex min-h-screen flex-col items-center justify-center px-5 py-10">

        {/* Header */}

        <div
          className={`text-center transition-all duration-1000 ${
            visible
              ? "translate-y-0 opacity-100"
              : "translate-y-6 opacity-0"
          }`}
        >
          <div className="mb-3 flex items-center justify-center gap-2">
            <Heart
              size={12}
              fill="currentColor"
              className="text-[#A991E8]"
            />

            <p className="text-xs uppercase tracking-[0.35em] text-[#8F72D5]">
              From far away
            </p>

            <Heart
              size={12}
              fill="currentColor"
              className="text-[#A991E8]"
            />
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-[#8F72D5] md:text-5xl">
            A Bouquet For You
          </h1>

          <p className="mx-auto mt-4 max-w-md leading-relaxed text-gray-500">
            I know flowers are one of the things you like.
            <br />
            So even though I cannot hand you a real bouquet,
            <br className="hidden sm:block" />
            I wanted to make one for you.
          </p>
        </div>

        {/* Bouquet */}

        <div
          className={`relative mt-2 h-[500px] w-[360px] transition-all duration-1000 sm:w-[420px] ${
            visible
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }`}
        >

          {/* Bouquet glow */}

          <div className="absolute left-1/2 top-[25%] h-72 w-72 -translate-x-1/2 rounded-full bg-[#BFA9F5]/30 blur-3xl" />

          {/* Back leaves */}

          <div className="absolute left-[7%] top-[48%] h-7 w-24 rotate-[-35deg] rounded-full bg-gradient-to-r from-emerald-400 to-green-500" />

          <div className="absolute right-[7%] top-[48%] h-7 w-24 rotate-[35deg] rounded-full bg-gradient-to-r from-green-500 to-emerald-400" />

          <div className="absolute left-[20%] top-[57%] h-6 w-20 rotate-[-25deg] rounded-full bg-green-500" />

          <div className="absolute right-[20%] top-[57%] h-6 w-20 rotate-[25deg] rounded-full bg-green-500" />

          {/* Stems */}

          <div className="absolute left-[48%] top-[35%] h-[250px] w-1 rotate-[-5deg] rounded-full bg-gradient-to-b from-green-400 to-emerald-600" />

          <div className="absolute left-[38%] top-[35%] h-[245px] w-1 rotate-[-17deg] rounded-full bg-gradient-to-b from-green-400 to-green-600" />

          <div className="absolute left-[59%] top-[35%] h-[245px] w-1 rotate-[13deg] rounded-full bg-gradient-to-b from-green-400 to-emerald-600" />

          <div className="absolute left-[28%] top-[41%] h-[220px] w-1 rotate-[-28deg] rounded-full bg-gradient-to-b from-green-400 to-green-600" />

          <div className="absolute left-[69%] top-[41%] h-[220px] w-1 rotate-[25deg] rounded-full bg-gradient-to-b from-green-400 to-green-600" />

          {/* Flowers */}

          {flowers.map((flower, index) => (
            <button
              key={`${flower.name}-${index}`}
              type="button"
              onClick={() => setSelected(flower)}
              aria-label={flower.name}
              className={`absolute z-20 text-6xl leading-none transition-all duration-700 hover:z-30 hover:scale-125 active:scale-95 ${
                visible
                  ? "scale-100 opacity-100"
                  : "scale-50 opacity-0"
              }`}
              style={{
                left: flower.x,
                top: flower.y,
                animationDelay: flower.delay,
              }}
            >
              <span className="absolute inset-3 -z-10 rounded-full bg-white/30 blur-xl" />
              {flower.emoji}
            </button>
          ))}

          {/* Greenery */}

          <div className="absolute left-[8%] top-[57%] text-3xl">
            🌿
          </div>

          <div className="absolute right-[8%] top-[57%] text-3xl">
            🌿
          </div>

          <div className="absolute left-[18%] top-[64%] text-2xl">
            🌱
          </div>

          <div className="absolute right-[18%] top-[64%] text-2xl">
            🌱
          </div>

          {/* Wrapping paper */}

          <div className="absolute bottom-0 left-1/2 z-10 -translate-x-1/2">

            <div className="h-[175px] w-[310px] rotate-[-3deg] bg-gradient-to-br from-[#EAE3FF] via-[#DBCFFA] to-[#BFA9F5] shadow-2xl [clip-path:polygon(7%_0%,93%_0%,100%_100%,0%_100%)] sm:w-[340px]" />

            <div className="absolute left-1/2 top-2 h-[165px] w-[295px] -translate-x-1/2 rotate-[3deg] bg-gradient-to-br from-[#FAF9FF] via-[#EAE3FF] to-[#C8B8F7] shadow-xl [clip-path:polygon(7%_0%,93%_0%,100%_100%,0%_100%)] sm:w-[325px]" />

            {/* Paper folds */}

            <div className="absolute bottom-0 left-[25%] h-[140px] w-px rotate-[12deg] bg-white/30" />

            <div className="absolute bottom-0 right-[25%] h-[140px] w-px rotate-[-12deg] bg-white/30" />

            {/* Ribbon */}

            <div className="absolute left-1/2 top-[52%] h-7 w-[102%] -translate-x-1/2 rounded bg-gradient-to-r from-[#9B7DE0] via-[#BFA9F5] to-[#9B7DE0] shadow-md" />

            {/* Ribbon knot */}

            <div className="absolute left-1/2 top-[39%] z-30 flex -translate-x-1/2 items-center justify-center">
              <div className="h-9 w-9 rotate-45 rounded-lg bg-[#9677DD] shadow-lg" />
              <div className="absolute h-5 w-5 rounded-full bg-[#D8CCFA]" />
            </div>

            {/* Ribbon tails */}

            <div className="absolute left-[39%] top-[55%] h-20 w-8 rotate-[18deg] bg-[#A991E8]" />

            <div className="absolute right-[39%] top-[55%] h-20 w-8 rotate-[-18deg] bg-[#A991E8]" />

          </div>

          {/* Bouquet sparkles */}

          <Sparkles
            className="absolute left-[8%] top-[34%] h-4 w-4 animate-pulse text-yellow-300"
          />

          <Sparkles
            className="absolute right-[8%] top-[37%] h-5 w-5 animate-pulse text-[#A991E8]"
          />

          <Sparkles
            className="absolute left-[31%] top-[12%] h-3 w-3 animate-pulse text-yellow-200"
          />

          <Sparkles
            className="absolute right-[30%] top-[15%] h-3 w-3 animate-pulse text-[#A991E8]"
          />
        </div>

        {/* Hint */}

        <div className="mt-0 flex items-center gap-2 text-sm text-gray-400">
          <Flower size={14} className="text-[#A991E8]" />

          <span className="animate-pulse">
            click a flower to see something
          </span>

          <Flower size={14} className="text-[#A991E8]" />
        </div>

      </section>

      {/* Popup */}

      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 px-5 backdrop-blur-sm"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative w-full max-w-md rounded-[2rem] border border-white/70 bg-white/95 p-8 text-center shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >

            <button
              type="button"
              onClick={() => setSelected(null)}
              aria-label="Close"
              className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-[#EAE3FF] text-[#8F72D5] transition hover:rotate-90 hover:bg-[#DBCFFA]"
            >
              <X size={18} />
            </button>

            <div className="mb-5 text-7xl">
              {selected.emoji}
            </div>

            <h2 className="text-2xl font-bold text-[#8F72D5]">
              {selected.name}
            </h2>

            <p className="mt-4 leading-relaxed text-gray-600">
              {selected.message}
            </p>

            <button
              type="button"
              onClick={() => setSelected(null)}
              className="mt-7 rounded-full bg-gradient-to-r from-[#BFA9F5] to-[#9677DD] px-7 py-3 font-semibold text-white shadow-lg transition hover:-translate-y-1 hover:shadow-xl active:scale-95"
            >
              Keep it 
            </button>
          </div>
        </div>
      )}

      {/* Animation */}

      <style jsx>{`
        .falling {
          top: -40px;
          opacity: 0;
          animation: falling 10s linear infinite;
        }

        @keyframes falling {
          0% {
            transform: translateY(-40px) rotate(0deg);
            opacity: 0;
          }

          10% {
            opacity: 0.35;
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