"use client";

import { useRouter } from "next/navigation";
import {
  ArrowRight,
  Sparkles,
  Leaf,
  Flower,
} from "lucide-react";

function TulipSVG({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Flower glow */}
      <circle
        cx="50"
        cy="43"
        r="25"
        fill="#F9A8D4"
        opacity="0.12"
      />

      {/* Outer flower */}
      <path
        d="M50 18C42 28 34 40 39 53C42 61 48 66 50 67C52 66 58 61 61 53C66 40 58 28 50 18Z"
        fill="#F472B6"
      />

      {/* Inner petal */}
      <path
        d="M50 25C46 36 46 48 50 57C54 48 54 36 50 25Z"
        fill="#EC4899"
      />

      {/* Stem */}
      <path
        d="M50 65V88"
        stroke="#22C55E"
        strokeWidth="4"
        strokeLinecap="round"
      />

      {/* Leaf */}
      <path
        d="M50 78C40 70 31 74 44 82"
        fill="#4ADE80"
      />
    </svg>
  );
}

function SmallFlower({
  className = "",
  delay = "0s",
}: {
  className?: string;
  delay?: string;
}) {
  return (
    <div
      className={`
        absolute
        pointer-events-none
        ${className}
      `}
      style={{ animationDelay: delay }}
    >
      <div className="relative">

        {/* Flower glow */}

        <div
          className="
            absolute
            -inset-3
            rounded-full
            bg-pink-200/20
            blur-lg
            animate-pulse
          "
        />

        {/* Stem */}

        <div
          className="
            absolute
            left-1/2
            top-5
            -translate-x-1/2
            w-[2px]
            h-10
            rounded-full
            bg-green-400/50
          "
        />

        {/* Petal 1 */}

        <div
          className="
            absolute
            left-1/2
            top-0
            -translate-x-[75%]
            w-4
            h-6
            rounded-[70%_30%_60%_40%]
            bg-pink-300/70
            rotate-[-15deg]
            animate-pulse
          "
        />

        {/* Petal 2 */}

        <div
          className="
            absolute
            left-1/2
            top-1
            w-4
            h-6
            rounded-[30%_70%_40%_60%]
            bg-pink-400/60
            rotate-[20deg]
            animate-pulse
          "
        />

        {/* Center */}

        <div
          className="
            absolute
            left-1/2
            top-5
            -translate-x-1/2
            w-2
            h-2
            rounded-full
            bg-yellow-300/80
            animate-pulse
          "
        />
      </div>
    </div>
  );
}

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
      `}
    >
      <div
        className="
          w-2
          h-3
          rounded-[100%_0_100%_0]
          bg-pink-300/40
          rotate-[-25deg]
          animate-bounce
        "
      />
    </div>
  );
}

export default function You() {
  const router = useRouter();

  return (
    <main
      className="
        min-h-screen
        relative
        overflow-hidden
        bg-gradient-to-br
        from-rose-50
        via-pink-50
        to-amber-50
        flex
        items-center
        justify-center
        px-4
        py-10
        sm:px-6
        sm:py-14
      "
    >

      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div
        className="
          absolute
          -top-40
          -right-40
          w-[28rem]
          h-[28rem]
          rounded-full
          bg-pink-200/30
          blur-3xl
          animate-pulse
        "
      />

      <div
        className="
          absolute
          -bottom-40
          -left-40
          w-[28rem]
          h-[28rem]
          rounded-full
          bg-amber-200/30
          blur-3xl
          animate-pulse
        "
      />

      <div
        className="
          absolute
          top-[30%]
          left-[30%]
          w-48
          h-48
          rounded-full
          bg-rose-200/20
          blur-3xl
          animate-pulse
        "
      />

      {/* =====================================================
          DECORATIVE FLOWERS
      ====================================================== */}

      <SmallFlower
        className="top-[12%] left-[6%] hidden sm:block"
        delay="0s"
      />

      <SmallFlower
        className="top-[20%] right-[8%] hidden sm:block scale-75"
        delay="1.5s"
      />

      <SmallFlower
        className="bottom-[17%] left-[9%] hidden md:block scale-90"
        delay="2s"
      />

      <SmallFlower
        className="bottom-[12%] right-[8%] hidden md:block scale-75"
        delay="3s"
      />

      {/* =====================================================
          FLOATING PETALS
      ====================================================== */}

      <FloatingPetal
        className="left-[15%] top-[25%]"
      />

      <FloatingPetal
        className="left-[27%] top-[13%]"
      />

      <FloatingPetal
        className="right-[22%] top-[30%]"
      />

      <FloatingPetal
        className="right-[12%] bottom-[25%]"
      />

      <FloatingPetal
        className="left-[18%] bottom-[20%]"
      />

      {/* =====================================================
          FLOATING LEAVES
      ====================================================== */}

      <div
        className="
          absolute
          left-[8%]
          top-[42%]
          text-green-300/40
          animate-bounce
        "
      >
        <Leaf
          size={28}
          strokeWidth={1.3}
        />
      </div>

      <div
        className="
          absolute
          right-[7%]
          bottom-[32%]
          text-green-300/40
          rotate-[25deg]
          animate-bounce
        "
      >
        <Leaf
          size={30}
          strokeWidth={1.3}
        />
      </div>

      {/* =====================================================
          SPARKLES
      ====================================================== */}

      <Sparkles
        className="
          absolute
          left-[20%]
          top-[18%]
          w-4
          h-4
          text-yellow-300/60
          animate-pulse
        "
      />

      <Sparkles
        className="
          absolute
          right-[28%]
          top-[14%]
          w-5
          h-5
          text-pink-300/60
          animate-pulse
        "
      />

      <Sparkles
        className="
          absolute
          left-[15%]
          bottom-[28%]
          w-3
          h-3
          text-rose-300/60
          animate-pulse
        "
      />

      <Sparkles
        className="
          absolute
          right-[15%]
          bottom-[20%]
          w-4
          h-4
          text-yellow-300/50
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
          w-full
          max-w-3xl
          text-center
        "
      >

        {/* ===================================================
            MAIN TULIP
        ==================================================== */}

        <div
          className="
            mx-auto
            mb-6
            w-20
            h-20
            sm:w-24
            sm:h-24
            rounded-full
            bg-white/70
            backdrop-blur-md
            border
            border-white
            shadow-[0_12px_35px_rgba(236,72,153,0.12)]
            flex
            items-center
            justify-center
            animate-pulse
          "
        >
          <div
            className="
              animate-bounce
            "
          >
            <TulipSVG
              className="
                w-11
                h-11
                sm:w-12
                sm:h-12
              "
            />
          </div>
        </div>

        {/* ===================================================
            HEADING
        ==================================================== */}

        <h1
          className="
            px-4
            text-3xl
            sm:text-4xl
            md:text-5xl
            font-bold
            leading-[1.12]
            tracking-tight
            text-slate-700
          "
        >
          There are things I

          <span
            className="
              block
              text-pink-500
            "
          >
            admire about you.
          </span>
        </h1>

        {/* Divider */}

        <div
          className="
            flex
            items-center
            justify-center
            gap-3
            mt-6
            mb-8
          "
        >
          <div className="w-10 h-px bg-pink-200" />

          <div
            className="
              w-1.5
              h-1.5
              rounded-full
              bg-pink-300
              animate-pulse
            "
          />

          <div className="w-10 h-px bg-pink-200" />
        </div>

        {/* ===================================================
            LETTER
        ==================================================== */}

        <article
          className="
            relative
            overflow-hidden
            rounded-[2rem]
            bg-white/75
            backdrop-blur-xl
            border
            border-white
            shadow-[0_20px_60px_rgba(80,50,60,0.10)]
            px-6
            py-8
            sm:px-10
            sm:py-10
            md:px-14
            md:py-12
            text-left
          "
        >

          {/* Inner glow */}

          <div
            className="
              absolute
              -top-20
              -right-20
              w-48
              h-48
              rounded-full
              bg-pink-100/50
              blur-3xl
              pointer-events-none
              animate-pulse
            "
          />

          <div
            className="
              absolute
              -bottom-20
              -left-20
              w-40
              h-40
              rounded-full
              bg-amber-100/40
              blur-3xl
              pointer-events-none
            "
          />

          <div className="relative z-10">

            {/* Opening */}

            <div className="text-center">

              <p
                className="
                  text-xl
                  sm:text-2xl
                  font-semibold
                  text-slate-700
                "
              >
                You&apos;re strong.
              </p>

              <div
                className="
                  mx-auto
                  mt-4
                  w-8
                  h-1
                  rounded-full
                  bg-pink-300
                  animate-pulse
                "
              />

            </div>

            {/* Paragraph */}

            <p
              className="
                mt-7
                text-base
                sm:text-lg
                leading-8
                text-slate-600
                text-center
                max-w-2xl
                mx-auto
              "
            >
              You&apos;re the kind of person who can be a big sister,
              someone others can look up to, while still carrying your
              own things quietly.
            </p>

            {/* Flower divider */}

            <div
              className="
                flex
                justify-center
                items-center
                my-9
              "
            >
              <span
                className="
                  text-pink-300
                  text-lg
                  animate-pulse
                "
              >
                ✿
              </span>
            </div>

            {/* Paragraph */}

            <p
              className="
                text-base
                sm:text-lg
                leading-8
                text-slate-600
                text-center
                max-w-2xl
                mx-auto
              "
            >
              You might not realize it, but I think that&apos;s
              something beautiful about you.
            </p>

            {/* Gentle transition */}

            <div
              className="
                mt-9
                space-y-4
                text-center
              "
            >

              <p className="text-base sm:text-lg text-slate-600">
                You don&apos;t have to be perfect.
              </p>

              <p className="text-base sm:text-lg text-slate-600">
                You don&apos;t have to have everything figured out.
              </p>

              <p className="text-base sm:text-lg text-slate-600">
                You&apos;re allowed to be tired.
              </p>

              <p className="text-base sm:text-lg text-slate-600">
                You&apos;re allowed to have bad days.
              </p>

            </div>

            {/* Final message */}

            <div
              className="
                mt-10
                pt-7
                border-t
                border-pink-100
                text-center
              "
            >

              <p
                className="
                  text-lg
                  sm:text-xl
                  font-semibold
                  leading-relaxed
                  text-pink-500
                "
              >
                And you&apos;re still someone

                <span className="block">
                  worth appreciating.
                </span>
              </p>

              <div
                className="
                  mt-5
                  text-pink-300
                  text-xl
                  animate-bounce
                "
              >
                🌷
              </div>

            </div>

          </div>
        </article>

        {/* ===================================================
            NEXT BUTTON
        ==================================================== */}

        <button
          type="button"
          onClick={() => router.push("/talking")}
          className="
            group
            mt-8
            inline-flex
            items-center
            justify-center
            gap-3
            rounded-full
            bg-pink-400
            hover:bg-pink-500
            active:scale-95
            px-7
            py-3.5
            sm:px-8
            sm:py-4
            text-white
            font-semibold
            shadow-[0_10px_30px_rgba(236,72,153,0.25)]
            hover:shadow-[0_14px_35px_rgba(236,72,153,0.32)]
            hover:-translate-y-0.5
            transition-all
            duration-300
          "
        >

          <span>
            Next Garden
          </span>

          <ArrowRight
            className="
              w-4
              h-4
              transition-transform
              duration-300
              group-hover:translate-x-1
            "
          />

        </button>

        {/* Footer */}

        <p
          className="
            mt-5
            text-xs
            text-slate-400
          "
        >
          one flower at a time ♡
        </p>

      </section>
    </main>
  );
}