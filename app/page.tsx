"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  Flower,
  Leaf,
  Sparkles,
  Sprout,
  Heart,
  ArrowRight,
} from "lucide-react";
import confetti from "canvas-confetti";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const timer = window.setTimeout(() => {
      confetti({
        particleCount: 30,
        spread: 65,
        startVelocity: 18,
        gravity: 0.8,
        scalar: 0.7,
        origin: {
          x: 0.5,
          y: 0.7,
        },
        colors: [
          "#f9a8d4",
          "#fbcfe8",
          "#c4b5fd",
          "#ddd6fe",
          "#fde68a",
        ],
      });
    }, 800);

    return () => {
      window.clearTimeout(timer);
    };
  }, []);

  const handleEnter = () => {
    confetti({
      particleCount: 80,
      spread: 90,
      startVelocity: 25,
      gravity: 0.9,
      scalar: 0.8,
      origin: {
        x: 0.5,
        y: 0.7,
      },
      colors: [
        "#f9a8d4",
        "#fbcfe8",
        "#c4b5fd",
        "#ddd6fe",
        "#fde68a",
      ],
    });

    window.setTimeout(() => {
      router.push("/garden");
    }, 650);
  };

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-rose-100 via-purple-100 to-pink-100 px-5">

      {/* Background glow */}

      <div className="pointer-events-none absolute -left-24 -top-24 h-80 w-80 rounded-full bg-pink-300/30 blur-3xl animate-pulse" />

      <div className="pointer-events-none absolute -bottom-32 -right-24 h-96 w-96 rounded-full bg-purple-300/25 blur-3xl animate-pulse" />

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-200/20 blur-3xl" />

      {/* Floating flower 1 */}

      <div className="absolute left-[10%] top-[14%] text-rose-300 opacity-50 animate-bounce">
        <Flower size={34} strokeWidth={1.5} />
      </div>

      {/* Floating flower 2 */}

      <div className="absolute right-[13%] top-[20%] text-purple-300 opacity-50 animate-bounce">
        <Flower size={28} strokeWidth={1.5} />
      </div>

      {/* Floating flower 3 */}

      <div className="absolute bottom-[18%] left-[15%] text-yellow-400 opacity-50 animate-bounce">
        <Flower size={27} strokeWidth={1.5} />
      </div>

      {/* Floating flower 4 */}

      <div className="absolute bottom-[14%] right-[11%] text-pink-300 opacity-50 animate-bounce">
        <Flower size={35} strokeWidth={1.5} />
      </div>

      {/* Floating leaves */}

      <div className="absolute left-[7%] top-[35%] rotate-[-25deg] text-green-300 opacity-40">
        <Leaf size={30} strokeWidth={1.5} />
      </div>

      <div className="absolute bottom-[30%] right-[7%] rotate-[25deg] text-green-300 opacity-40">
        <Leaf size={30} strokeWidth={1.5} />
      </div>

      {/* Sparkles */}

      <div className="absolute left-[38%] top-[15%] text-yellow-300 opacity-60 animate-pulse">
        <Sparkles size={20} />
      </div>

      <div className="absolute right-[34%] bottom-[24%] text-pink-300 opacity-50 animate-pulse">
        <Sparkles size={18} />
      </div>

      {/* Main card */}

   <div className="px-4 sm:px-6">
  <section className="relative z-10 w-full max-w-xl rounded-[2rem] border border-white/60 bg-white/60 px-8 py-12 text-center shadow-2xl backdrop-blur-xl md:px-14 md:py-14">

        {/* Main flower */}

        <div className="relative mb-8 flex justify-center">

          {/* Glow */}

          <div className="absolute h-28 w-28 rounded-full bg-rose-300/30 blur-2xl animate-pulse" />

          {/* Flower */}

          <div className="relative text-rose-400 animate-bounce">
            <svg
              width="80"
              height="80"
              viewBox="0 0 80 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <circle
                cx="40"
                cy="40"
                r="8"
                fill="currentColor"
              />

              <circle
                cx="40"
                cy="21"
                r="15"
                fill="currentColor"
                opacity="0.85"
              />

              <circle
                cx="59"
                cy="40"
                r="15"
                fill="currentColor"
                opacity="0.85"
              />

              <circle
                cx="40"
                cy="59"
                r="15"
                fill="currentColor"
                opacity="0.85"
              />

              <circle
                cx="21"
                cy="40"
                r="15"
                fill="currentColor"
                opacity="0.85"
              />
            </svg>
          </div>



        </div>

        {/* Title */}

        <h1 className="mb-5 text-4xl font-bold tracking-tight text-rose-500 md:text-5xl">
          For Hana
        </h1>

        {/* Main message */}

        <p className="mb-3 text-lg leading-relaxed text-gray-700 md:text-xl">
          I made a little something for you.
        </p>

        <p className="mb-9 text-base leading-relaxed text-gray-500 md:text-lg">
          It isn&apos;t a real bouquet...
          <br />
          but I hope you&apos;ll like this one.
        </p>

        {/* Button */}

        <button
          type="button"
          onClick={handleEnter}
          className="group rounded-full bg-rose-400 px-8 py-3.5 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-rose-500 hover:shadow-xl active:scale-95"
        >
          <span className="flex items-center gap-2">

            <Sprout
              size={20}
              strokeWidth={1.8}
              className="transition-transform duration-300 group-hover:-rotate-12"
            />

            <span>
              Enter the Garden
            </span>

            <ArrowRight
              size={18}
              strokeWidth={1.8}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />

          </span>
        </button>

        {/* Footer */}

        <div className="mt-7 flex items-center justify-center gap-2 text-xs text-gray-400">

          <Heart
            size={12}
            className="text-rose-300"
            fill="currentColor"
          />

          <span>
          by ryandi
          </span>

          <Heart
            size={12}
            className="text-rose-300"
            fill="currentColor"
          />

        </div>

       </section>
</div>

      {/* Bottom garden */}

      <div className="absolute bottom-4 left-0 right-0 flex items-end justify-center gap-5 opacity-30">

        <Sprout
          size={20}
          className="text-green-500"
        />

        <Flower
          size={22}
          className="text-rose-400"
        />

        <Sprout
          size={18}
          className="text-green-500"
        />

        <Flower
          size={25}
          className="text-yellow-400"
        />

        <Sprout
          size={18}
          className="text-green-500"
        />

        <Flower
          size={21}
          className="text-pink-400"
        />

        <Sprout
          size={20}
          className="text-green-500"
        />

      </div>

    </main>
  );
}