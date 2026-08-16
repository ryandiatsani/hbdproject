"use client";

import { useRouter } from "next/navigation";
import {
  Flower,
  Flower2,
  Leaf,
  ArrowRight,
  Sparkles,
  Sprout,
} from "lucide-react";

function FloatingPetal({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div
      className={`
        absolute
        pointer-events-none
        ${className}
        animate-bounce
      `}
    >
      <div
        className="
          w-2
          h-3
          rounded-[100%_0_100%_0]
          bg-rose-300/40
          rotate-[-25deg]
        "
      />
    </div>
  );
}

function Firefly({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div
      className={`
        absolute
        pointer-events-none
        ${className}
        animate-pulse
      `}
    >
      <div
        className="
          w-1.5
          h-1.5
          rounded-full
          bg-yellow-200
          shadow-[0_0_12px_rgba(253,224,71,0.9)]
        "
      />
    </div>
  );
}

function GardenFlower() {
  return (
    <div className="relative w-14 h-16">

      {/* Flower glow */}

      <div
        className="
          absolute
          top-0
          left-1/2
          -translate-x-1/2
          w-12
          h-12
          rounded-full
          bg-rose-300/30
          blur-xl
          animate-pulse
        "
      />

      {/* Flower */}

      <div
        className="
          absolute
          top-0
          left-1/2
          -translate-x-1/2
          animate-pulse
        "
      >
        <Flower2
          className="
            w-12
            h-12
            text-rose-400
            fill-rose-300/30
          "
          strokeWidth={1.5}
        />
      </div>

      {/* Stem */}

      <div
        className="
          absolute
          top-9
          left-1/2
          -translate-x-1/2
          w-[3px]
          h-8
          rounded-full
          bg-gradient-to-b
          from-green-400
          to-emerald-500
        "
      />

      {/* Leaf */}

      <div
        className="
          absolute
          top-[40px]
          left-[7px]
          w-6
          h-3
          rounded-[100%_0_100%_0]
          bg-green-400
          rotate-[-25deg]
          animate-bounce
        "
      />

      {/* Sparkle */}

      <Sparkles
        className="
          absolute
          -top-2
          -right-3
          w-3
          h-3
          text-pink-300
          animate-pulse
        "
      />
    </div>
  );
}

export default function Garden() {
  const router = useRouter();

  return (
    <main
      className="
        min-h-screen
        relative
        overflow-hidden
        flex
        items-center
        justify-center
        px-4
        sm:px-6
        py-10
        bg-gradient-to-br
        from-purple-100
        via-pink-50
        to-emerald-100
      "
    >

      {/* =====================================================
          LARGE BACKGROUND GLOW
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -top-40
          -left-40
          w-[28rem]
          h-[28rem]
          rounded-full
          bg-purple-300/30
          blur-3xl
          animate-pulse
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -bottom-40
          -right-40
          w-[28rem]
          h-[28rem]
          rounded-full
          bg-pink-300/30
          blur-3xl
          animate-pulse
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          top-[15%]
          left-[35%]
          w-48
          h-48
          rounded-full
          bg-yellow-200/20
          blur-3xl
          animate-pulse
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-[5%]
          left-[5%]
          w-56
          h-56
          rounded-full
          bg-emerald-200/20
          blur-3xl
          animate-pulse
        "
      />

      {/* =====================================================
          FLOATING FLOWERS
      ====================================================== */}

      <div
        className="
          absolute
          left-[8%]
          top-[16%]
          text-rose-300/40
          animate-bounce
        "
      >
        <Flower
          size={28}
          strokeWidth={1.3}
        />
      </div>

      <div
        className="
          absolute
          right-[9%]
          top-[22%]
          text-purple-300/40
          animate-bounce
        "
      >
        <Flower
          size={23}
          strokeWidth={1.3}
        />
      </div>

      <div
        className="
          absolute
          bottom-[18%]
          left-[9%]
          text-yellow-400/40
          animate-bounce
        "
      >
        <Flower
          size={25}
          strokeWidth={1.3}
        />
      </div>

      <div
        className="
          absolute
          bottom-[15%]
          right-[8%]
          text-pink-300/40
          animate-bounce
        "
      >
        <Flower
          size={30}
          strokeWidth={1.3}
        />
      </div>

      {/* =====================================================
          FLOATING LEAVES
      ====================================================== */}

      <div
        className="
          absolute
          left-[6%]
          top-[38%]
          rotate-[-25deg]
          text-green-300/40
          animate-bounce
        "
      >
        <Leaf
          size={30}
          strokeWidth={1.3}
        />
      </div>

      <div
        className="
          absolute
          bottom-[31%]
          right-[6%]
          rotate-[25deg]
          text-green-300/40
          animate-bounce
        "
      >
        <Leaf
          size={28}
          strokeWidth={1.3}
        />
      </div>

      {/* =====================================================
          FLOATING PETALS
      ====================================================== */}

      <FloatingPetal
        className="left-[17%] top-[12%]"
      />

      <FloatingPetal
        className="left-[28%] top-[20%]"
      />

      <FloatingPetal
        className="right-[20%] top-[15%]"
      />

      <FloatingPetal
        className="right-[10%] top-[40%]"
      />

      <FloatingPetal
        className="left-[13%] bottom-[25%]"
      />

      <FloatingPetal
        className="right-[27%] bottom-[20%]"
      />

      <FloatingPetal
        className="left-[35%] bottom-[15%]"
      />

      {/* =====================================================
          FIREFLIES
      ====================================================== */}

      <Firefly
        className="left-[25%] top-[18%]"
      />

      <Firefly
        className="right-[30%] top-[25%]"
      />

      <Firefly
        className="left-[12%] top-[52%]"
      />

      <Firefly
        className="right-[14%] bottom-[28%]"
      />

      <Firefly
        className="left-[31%] bottom-[19%]"
      />

      <Firefly
        className="right-[38%] bottom-[35%]"
      />

      {/* =====================================================
          SPARKLES
      ====================================================== */}

      <Sparkles
        className="
          absolute
          left-[34%]
          top-[14%]
          w-5
          h-5
          text-yellow-300/60
          animate-pulse
        "
      />

      <Sparkles
        className="
          absolute
          bottom-[25%]
          right-[32%]
          w-4
          h-4
          text-pink-300/60
          animate-pulse
        "
      />

      <Sparkles
        className="
          absolute
          left-[12%]
          top-[65%]
          w-3
          h-3
          text-purple-300/50
          animate-pulse
        "
      />

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <section
        className="
          relative
          z-10
          max-w-lg
          w-full
          text-center
          animate-in
          fade-in
          duration-1000
        "
      >

        {/* Main flower */}

        <div
          className="
            mx-auto
            mb-6
            w-20
            h-20
            rounded-full
            bg-white/60
            backdrop-blur-xl
            flex
            items-center
            justify-center
            shadow-xl
            border
            border-white/70
            animate-bounce
          "
        >
          <GardenFlower />
        </div>

        {/* Title */}

        <h1
          className="
            text-4xl
            sm:text-5xl
            font-bold
            text-rose-500
            tracking-tight
          "
        >
          A Little Garden
        </h1>

        {/* Subtitle */}


        {/* ===================================================
            MESSAGE CARD
        ==================================================== */}

        <div
          className="
            mt-8
            rounded-[2rem]
            border
            border-white/70
            bg-white/60
            px-6
            py-9
            text-center
            shadow-2xl
            backdrop-blur-xl
            sm:px-10
            sm:py-10
          "
        >

          <p
            className="
              text-xl
              font-medium
              leading-relaxed
              tracking-tight
              text-gray-700
              sm:text-2xl
            "
          >
            I couldn&apos;t give you flowers in person,

            <span className="block text-rose-400 mt-1">
              so I made a little place for them here.
            </span>
          </p>

          <div
            className="
              mx-auto
              mt-7
              h-px
              w-12
              bg-rose-200
            "
          />

          <p
            className="
              mt-7
              text-sm
              leading-7
              tracking-wide
              text-gray-500
              sm:text-base
            "
          >
            There are a few things
            <br />
            I wanted to leave for you along the way.
          </p>

          <p
            className="
              mt-7
              text-sm
              leading-7
              tracking-wide
              text-gray-500
              sm:text-base
            "
          >
            Nothing you need to answer.
            <br />
            Nothing you need to figure out.
          </p>

          <p
            className="
              mt-7
              text-sm
              font-medium
              leading-7
              text-rose-400/90
              sm:text-base
            "
          >
            Just a few words from me,
            <br />
            and something waiting for you at the end.
          </p>

          <div
            className="
              mt-7
              pt-6
              border-t
              border-rose-100
            "
          >
            <p
              className="
                text-xs
                sm:text-sm
                text-gray-400
              "
            >
              Take your time. ♡
            </p>
          </div>

        </div>

        {/* ===================================================
            BUTTON
        ==================================================== */}

        <button
          type="button"
          onClick={() => router.push("/thank-you")}
          className="
            mt-8
            group
            inline-flex
            items-center
            gap-2
            rounded-full
            px-8
            py-3.5
            bg-gradient-to-r
            from-rose-400
            to-pink-500
            text-white
            font-medium
            shadow-lg
            hover:-translate-y-1
            hover:shadow-xl
            transition-all
            duration-300
            active:scale-95
          "
        >
          <Sprout
            className="
              w-4
              h-4
              group-hover:-rotate-12
              transition-transform
              duration-300
            "
          />

          <span>
            Enter the Garden
          </span>

          <ArrowRight
            className="
              w-4
              h-4
              group-hover:translate-x-1
              transition-transform
              duration-300
            "
          />
        </button>

        <p className="mt-5 text-xs text-slate-400">
          one little step at a time ♡
        </p>

      </section>

      {/* =====================================================
          BOTTOM MINI GARDEN
      ====================================================== */}

      <div
        className="
          absolute
          bottom-3
          left-0
          right-0
          flex
          items-end
          justify-center
          gap-4
          opacity-30
          pointer-events-none
        "
      >
        <Sprout
          size={20}
          className="text-green-500 animate-bounce"
        />

        <Flower
          size={22}
          className="text-rose-400 animate-bounce"
        />

        <Sprout
          size={18}
          className="text-green-500 animate-bounce"
        />

        <Flower
          size={25}
          className="text-yellow-400 animate-bounce"
        />

        <Sprout
          size={18}
          className="text-green-500 animate-bounce"
        />

        <Flower
          size={21}
          className="text-pink-400 animate-bounce"
        />

        <Sprout
          size={20}
          className="text-green-500 animate-bounce"
        />
      </div>

    </main>
  );
}