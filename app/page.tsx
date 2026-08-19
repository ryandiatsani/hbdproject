"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Flower,
  Leaf,
  Sparkles,
  Sprout,
  Heart,
  ArrowRight,
  Gift,
  X,
  Download,
} from "lucide-react";
import confetti from "canvas-confetti";

export default function Home() {
  const router = useRouter();
  const [showGift, setShowGift] = useState(false);

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
          "#DBCFFA",
          "#BFA9F5",
          "#EAE3FF",
          "#C8B8F7",
          "#FDE68A",
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
        "#DBCFFA",
        "#BFA9F5",
        "#EAE3FF",
        "#C8B8F7",
        "#FDE68A",
      ],
    });

    window.setTimeout(() => {
      router.push("/garden");
    }, 650);
  };

  const handleGift = () => {
    setShowGift(true);

    confetti({
      particleCount: 50,
      spread: 70,
      startVelocity: 20,
      gravity: 0.8,
      scalar: 0.7,
      origin: {
        x: 0.85,
        y: 0.8,
      },
      colors: [
        "#DBCFFA",
        "#BFA9F5",
        "#EAE3FF",
        "#FDE68A",
      ],
    });
  };

  const handleDownload = async () => {
    try {
      const response = await fetch("/hana_flower.png", {
        cache: "no-store",
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch image: ${response.status}`);
      }

      const blob = await response.blob();

      const blobUrl = window.URL.createObjectURL(blob);

      const link = document.createElement("a");

      link.href = blobUrl;
      link.download = "hana_flower.png";
      link.style.display = "none";

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      window.setTimeout(() => {
        window.URL.revokeObjectURL(blobUrl);
      }, 1000);
    } catch (error) {
      console.error("Download failed:", error);

      // Fallback if browser blocks the download
      window.open("/hana_flower.png", "_blank");
    }
  };

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-[#EAE3FF] via-[#DBCFFA] to-[#F0EBFF] px-5">

      {/* ============================================ */}
      {/* BACKGROUND */}
      {/* ============================================ */}

      <div className="pointer-events-none absolute -left-24 -top-24 h-80 w-80 rounded-full bg-[#DBCFFA]/50 blur-3xl animate-pulse" />

      <div className="pointer-events-none absolute -bottom-32 -right-24 h-96 w-96 rounded-full bg-[#BFA9F5]/30 blur-3xl animate-pulse" />

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-200/20 blur-3xl" />

      {/* ============================================ */}
      {/* FLOATING FLOWERS */}
      {/* ============================================ */}

      <div className="absolute left-[10%] top-[14%] animate-bounce text-[#BFA9F5] opacity-50">
        <Flower size={34} strokeWidth={1.5} />
      </div>

      <div className="absolute right-[13%] top-[20%] animate-bounce text-[#A991E8] opacity-50">
        <Flower size={28} strokeWidth={1.5} />
      </div>

      <div className="absolute bottom-[18%] left-[15%] animate-bounce text-yellow-400 opacity-50">
        <Flower size={27} strokeWidth={1.5} />
      </div>

      <div className="absolute bottom-[14%] right-[11%] animate-bounce text-[#C8B8F7] opacity-50">
        <Flower size={35} strokeWidth={1.5} />
      </div>

      {/* ============================================ */}
      {/* LEAVES */}
      {/* ============================================ */}

      <div className="absolute left-[7%] top-[35%] rotate-[-25deg] text-green-300 opacity-40">
        <Leaf size={30} strokeWidth={1.5} />
      </div>

      <div className="absolute bottom-[30%] right-[7%] rotate-[25deg] text-green-300 opacity-40">
        <Leaf size={30} strokeWidth={1.5} />
      </div>

      {/* ============================================ */}
      {/* SPARKLES */}
      {/* ============================================ */}

      <div className="absolute left-[38%] top-[15%] animate-pulse text-yellow-300 opacity-60">
        <Sparkles size={20} />
      </div>

      <div className="absolute bottom-[24%] right-[34%] animate-pulse text-[#BFA9F5] opacity-50">
        <Sparkles size={18} />
      </div>

      {/* ============================================ */}
      {/* MAIN CARD */}
      {/* ============================================ */}

      <div className="px-4 sm:px-6">
        <section className="relative z-10 w-full max-w-xl rounded-[2rem] border border-white/60 bg-white/60 px-8 py-12 text-center shadow-2xl backdrop-blur-xl md:px-14 md:py-14">

          {/* Main flower */}
          <div className="relative mb-8 flex justify-center">

            {/* Glow */}
            <div className="absolute h-28 w-28 animate-pulse rounded-full bg-[#DBCFFA]/50 blur-2xl" />

            {/* Flower */}
            <div className="relative animate-bounce text-[#BFA9F5]">
              <svg
                width="80"
                height="80"
                viewBox="0 0 80 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <circle cx="40" cy="40" r="8" fill="currentColor" />

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
          <h1 className="mb-5 text-4xl font-bold tracking-tight text-[#9B7DE0] md:text-5xl">
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

          {/* Enter button */}
          <button
            type="button"
            onClick={handleEnter}
            className="group rounded-full bg-[#BFA9F5] px-8 py-3.5 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#9B7DE0] hover:shadow-xl active:scale-95"
          >
            <span className="flex items-center gap-2">
              <Sprout
                size={20}
                strokeWidth={1.8}
                className="transition-transform duration-300 group-hover:-rotate-12"
              />

              <span>Enter the Garden</span>

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
              className="text-[#BFA9F5]"
              fill="currentColor"
            />

            <span>by ryandi</span>

            <Heart
              size={12}
              className="text-[#BFA9F5]"
              fill="currentColor"
            />
          </div>
        </section>
      </div>

      {/* ============================================ */}
      {/* BOTTOM GARDEN */}
      {/* ============================================ */}

      <div className="absolute bottom-4 left-0 right-0 flex items-end justify-center gap-5 opacity-30">
        <Sprout size={20} className="text-green-500" />

        <Flower size={22} className="text-[#BFA9F5]" />

        <Sprout size={18} className="text-green-500" />

        <Flower size={25} className="text-yellow-400" />

        <Sprout size={18} className="text-green-500" />

        <Flower size={21} className="text-[#C8B8F7]" />

        <Sprout size={20} className="text-green-500" />
      </div>

      {/* ============================================ */}
      {/* TODAY'S GIFT FLOATING BUTTON */}
      {/* ============================================ */}

      <button
        type="button"
        onClick={handleGift}
        aria-label="Open today's gift"
        className="group fixed bottom-6 right-6 z-40 flex items-center gap-3 rounded-full border border-white/70 bg-white/80 px-4 py-3 shadow-xl backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-2xl active:scale-95 sm:bottom-8 sm:right-8"
      >
        {/* Gift icon */}
        <div className="relative flex h-11 w-11 items-center justify-center rounded-full bg-[#DBCFFA] text-[#8F72D5] shadow-md transition-transform duration-300 group-hover:rotate-[-8deg] group-hover:scale-110">
          <Gift size={23} strokeWidth={1.8} />

          {/* Notification dot */}
          <span className="absolute -right-1 -top-1 h-3.5 w-3.5 animate-pulse rounded-full border-2 border-white bg-[#BFA9F5]" />
        </div>

        {/* Text */}
        <div className="hidden text-left sm:block">
          <p className="text-[10px] font-medium uppercase tracking-widest text-[#9B7DE0]">
            A little surprise
          </p>

          <p className="text-sm font-semibold text-gray-700">
            Today&apos;s Gift 🎁
          </p>
        </div>
      </button>

      {/* ============================================ */}
      {/* GIFT POPUP */}
      {/* ============================================ */}

      {showGift && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 px-5 backdrop-blur-sm"
          onClick={() => setShowGift(false)}
        >
          <div
            className="relative w-full max-w-md rounded-[2rem] border border-white/70 bg-white/90 p-5 shadow-2xl backdrop-blur-xl sm:p-6"
            onClick={(e) => e.stopPropagation()}
          >

            {/* Close button */}
            <button
              type="button"
              onClick={() => setShowGift(false)}
              aria-label="Close gift"
              className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/80 text-gray-500 shadow-md transition-all hover:bg-white hover:text-gray-800 hover:rotate-90"
            >
              <X size={18} />
            </button>

            {/* Gift heading */}
            <div className="mb-5 text-center">

              <div className="mb-3 flex justify-center">
                <div className="flex h-14 w-14 animate-bounce items-center justify-center rounded-full bg-[#DBCFFA] text-[#8F72D5] shadow-md">
                  <Gift size={28} strokeWidth={1.7} />
                </div>
              </div>

              <h2 className="text-2xl font-bold text-[#9B7DE0]">
                A Little Gift for You 
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                Just something small for today.
              </p>
            </div>

            {/* Gift image */}
            <div className="overflow-hidden rounded-2xl border border-[#DBCFFA]/50 bg-[#F5F1FF] shadow-inner">
              <img
                src="/hana_flower.png"
                alt="Today's gift"
                className="max-h-[60vh] w-full object-contain"
              />
            </div>

            {/* Message */}
            <p className="mt-5 text-center text-sm italic text-gray-500">
              hope this makes you smile ♡
            </p>

            {/* Buttons */}
            <div className="mt-4 flex items-center justify-center gap-3">

              {/* Download */}
              <button
                type="button"
                onClick={handleDownload}
                className="flex items-center gap-2 rounded-full bg-[#EAE3FF] px-5 py-2.5 text-sm font-semibold text-[#8F72D5] shadow-md transition-all hover:-translate-y-0.5 hover:bg-[#DBCFFA] hover:shadow-lg active:scale-95"
              >
                <Download size={17} strokeWidth={2} />
                Download
              </button>

           

            </div>
          </div>
        </div>
      )}
    </main>
  );
}