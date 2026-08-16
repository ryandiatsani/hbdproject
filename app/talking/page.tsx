"use client";

import { useRouter } from "next/navigation";
import { ArrowRight, Sparkles, Flower2, Leaf, Heart } from "lucide-react";

function OrchidSVG({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Soft glow behind flower */}
      <circle
        cx="50"
        cy="48"
        r="28"
        fill="#E9D5FF"
        opacity="0.18"
      />

      {/* Left petal */}
      <path
        d="M50 45C38 20 12 25 25 48C32 60 45 58 50 55"
        fill="#C084FC"
      />

      {/* Right petal */}
      <path
        d="M50 45C62 20 88 25 75 48C68 60 55 58 50 55"
        fill="#A855F7"
      />

      {/* Bottom petals */}
      <path
        d="M50 48C30 45 28 70 50 65C72 70 70 45 50 48Z"
        fill="#E879F9"
      />

      {/* Center */}
      <circle
        cx="50"
        cy="52"
        r="7"
        fill="#FDE68A"
      />

      {/* Tiny center highlight */}
      <circle
        cx="48"
        cy="50"
        r="2"
        fill="#FFF7ED"
        opacity="0.8"
      />

      {/* Stem */}
      <path
        d="M50 60V88"
        stroke="#22C55E"
        strokeWidth="5"
        strokeLinecap="round"
      />

      {/* Leaf */}
      <path
        d="M50 78C35 72 30 82 48 85"
        fill="#4ADE80"
      />
    </svg>
  );
}

function LittleFlower({
  className = "",
  delay = "0s",
  color = "purple",
}: {
  className?: string;
  delay?: string;
  color?: "purple" | "pink";
}) {
  const petalOne =
    color === "pink" ? "bg-pink-300/60" : "bg-purple-300/60";

  const petalTwo =
    color === "pink" ? "bg-rose-300/50" : "bg-fuchsia-300/60";

  return (
    <div
      className={`absolute pointer-events-none ${className}`}
      style={{ animationDelay: delay }}
    >
      <div className="relative h-20 w-12 animate-bounce [animation-duration:5s]">

        {/* Stem */}
        <div className="absolute bottom-0 left-1/2 h-11 w-[2px] -translate-x-1/2 rounded-full bg-green-400/40" />

        {/* Leaf */}
        <div className="absolute bottom-4 left-0 h-2.5 w-5 rotate-[-25deg] rounded-[100%_0_100%_0] bg-green-300/40" />

        {/* Petal 1 */}
        <div
          className={`absolute left-1/2 top-0 h-7 w-4 -translate-x-1/2 rotate-[-15deg] rounded-[70%_30%_60%_40%] ${petalOne}`}
        />

        {/* Petal 2 */}
        <div
          className={`absolute left-[42%] top-1 h-7 w-4 rotate-[20deg] rounded-[30%_70%_40%_60%] ${petalTwo}`}
        />

        {/* Center */}
        <div className="absolute left-1/2 top-5 h-2 w-2 -translate-x-1/2 rounded-full bg-yellow-300/70" />
      </div>
    </div>
  );
}

function FloatingSparkle({
  className = "",
  delay = "0s",
}: {
  className?: string;
  delay?: string;
}) {
  return (
    <div
      className={`absolute pointer-events-none ${className}`}
      style={{ animationDelay: delay }}
    >
      <Sparkles className="h-4 w-4 animate-pulse text-purple-300/70" />
    </div>
  );
}

export default function Talking() {
  const router = useRouter();

  return (
    <main
      className="
        relative
        flex
        min-h-screen
        items-center
        justify-center
        overflow-hidden
        bg-gradient-to-br
        from-violet-50
        via-pink-50
        to-sky-50
        px-4
        py-10
        sm:px-6
        sm:py-14
      "
    >

      {/* =====================================================
          BACKGROUND ATMOSPHERE
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -left-40
          -top-40
          h-[28rem]
          w-[28rem]
          rounded-full
          bg-purple-300/20
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
          h-[30rem]
          w-[30rem]
          rounded-full
          bg-pink-300/20
          blur-3xl
          animate-pulse
        "
      />

      {/* Center soft light */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-72
          w-72
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-white/40
          blur-3xl
          animate-pulse
        "
      />

      {/* =====================================================
          FLOATING FLOWERS
      ====================================================== */}

      <LittleFlower
        className="left-[5%] top-[14%] hidden sm:block"
        delay="0s"
        color="purple"
      />

      <LittleFlower
        className="right-[7%] top-[19%] hidden sm:block scale-75"
        delay="1s"
        color="pink"
      />

      <LittleFlower
        className="bottom-[16%] left-[7%] hidden md:block scale-90"
        delay="2s"
        color="pink"
      />

      <LittleFlower
        className="bottom-[12%] right-[8%] hidden md:block scale-75"
        delay="3s"
        color="purple"
      />

      {/* =====================================================
          FLOATING SPARKLES
      ====================================================== */}

      <FloatingSparkle
        className="left-[20%] top-[17%]"
        delay="0s"
      />

      <FloatingSparkle
        className="right-[22%] top-[28%]"
        delay="1.2s"
      />

      <FloatingSparkle
        className="bottom-[22%] left-[18%]"
        delay="2s"
      />

      <FloatingSparkle
        className="bottom-[18%] right-[20%]"
        delay="2.8s"
      />

      {/* Tiny lights */}

      <div className="absolute left-[28%] top-[12%] h-1.5 w-1.5 rounded-full bg-white/80 animate-pulse" />

      <div className="absolute right-[30%] top-[18%] h-2 w-2 rounded-full bg-purple-200/70 animate-bounce" />

      <div className="absolute bottom-[20%] left-[30%] h-1.5 w-1.5 rounded-full bg-pink-200 animate-pulse" />

      <div className="absolute bottom-[30%] right-[27%] h-2 w-2 rounded-full bg-white/80 animate-pulse" />

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

        {/* =====================================================
            ORCHID
        ====================================================== */}

        <div
          className="
            group
            relative
            mx-auto
            mb-6
            flex
            h-20
            w-20
            items-center
            justify-center
            rounded-full
            border
            border-white/80
            bg-white/70
            shadow-[0_12px_35px_rgba(168,85,247,0.14)]
            backdrop-blur-md
            transition-transform
            duration-500
            hover:scale-105
            sm:h-24
            sm:w-24
          "
        >

          {/* Flower glow */}

          <div
            className="
              pointer-events-none
              absolute
              inset-2
              rounded-full
              bg-purple-300/20
              blur-xl
              animate-pulse
            "
          />

          {/* Orchid */}

          <OrchidSVG
            className="
              relative
              z-10
              h-11
              w-11
              animate-bounce
              [animation-duration:4s]
              sm:h-12
              sm:w-12
            "
          />

          {/* Tiny sparkle */}

          <Sparkles
            className="
              absolute
              -right-1
              -top-1
              h-4
              w-4
              text-purple-300
              animate-pulse
            "
          />

        </div>

        {/* =====================================================
            HEADING
        ====================================================== */}

        <h1
          className="
            px-4
            text-3xl
            font-bold
            leading-[1.12]
            tracking-tight
            text-slate-700
            sm:text-4xl
            md:text-5xl
          "
        >
          I&apos;m glad

          <span
            className="
              block
              text-purple-500
            "
          >
            we&apos;re talking again.
          </span>
        </h1>

        {/* Divider */}

        <div
          className="
            mt-6
            mb-8
            flex
            items-center
            justify-center
            gap-3
          "
        >
          <div className="h-px w-10 bg-purple-200" />

          <Flower2
            className="
              h-4
              w-4
              text-purple-300
              animate-spin
              [animation-duration:8s]
            "
          />

          <div className="h-px w-10 bg-purple-200" />
        </div>

        {/* =====================================================
            LETTER
        ====================================================== */}

        <article
          className="
            relative
            overflow-hidden
            rounded-[2rem]
            border
            border-white/80
            bg-white/75
            px-6
            py-8
            shadow-[0_20px_60px_rgba(80,50,90,0.10)]
            backdrop-blur-xl
            sm:px-10
            sm:py-10
            md:px-14
            md:py-12
          "
        >

          {/* Inner glow */}

          <div
            className="
              pointer-events-none
              absolute
              -right-24
              -top-24
              h-56
              w-56
              rounded-full
              bg-purple-200/30
              blur-3xl
              animate-pulse
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              -bottom-24
              -left-24
              h-48
              w-48
              rounded-full
              bg-pink-200/20
              blur-3xl
            "
          />

          <div className="relative z-10">

            {/* Apology */}

            <p
              className="
                mx-auto
                max-w-2xl
                text-lg
                leading-8
                text-slate-600
                sm:text-xl
              "
            >
              I&apos;m sorry if, before, I tried too hard to make
              something happen and ended up hurting our friendship.
            </p>

            {/* Divider */}

            <div className="my-8 flex items-center justify-center gap-3">
              <div className="h-px w-8 bg-purple-100" />

              <span
                className="
                  text-lg
                  text-purple-300
                  animate-pulse
                "
              >
                ✿
              </span>

              <div className="h-px w-8 bg-purple-100" />
            </div>

            {/* Main feeling */}

            <p
              className="
                text-xl
                font-semibold
                leading-relaxed
                text-purple-500
                sm:text-2xl
              "
            >
              I&apos;m really glad we&apos;re talking again.
            </p>

            {/* Small message */}

            <p
              className="
                mx-auto
                mt-7
                max-w-xl
                text-base
                leading-8
                text-slate-500
                sm:text-lg
              "
            >
              I like hearing about your day, sharing random little
              things, and laughing at stupid things together.
            </p>

            {/* Closing */}

            <div
              className="
                mt-9
                border-t
                border-purple-100
                pt-7
              "
            >

              <p
                className="
                  text-base
                  italic
                  leading-8
                  text-slate-500
                  sm:text-lg
                "
              >
                I don&apos;t want to force anything anymore.
              </p>

              <p
                className="
                  mt-1
                  text-base
                  font-medium
                  leading-8
                  text-slate-600
                  sm:text-lg
                "
              >
                Let&apos;s just enjoy the casual conversations we have.
              </p>

              <div className="mt-5 flex justify-center">
                <Heart
                  className="
                    h-5
                    w-5
                    fill-purple-200
                    text-purple-300
                    animate-pulse
                  "
                />
              </div>

            </div>

          </div>
        </article>

        {/* =====================================================
            BUTTON
        ====================================================== */}

        <button
          type="button"
          onClick={() => router.push("/bouquet")}
          className="
            group
            mt-8
            inline-flex
            items-center
            justify-center
            gap-3
            rounded-full
            bg-gradient-to-r
            from-purple-400
            to-pink-400
            px-7
            py-3.5
            font-semibold
            text-white
            shadow-[0_10px_30px_rgba(168,85,247,0.22)]
            transition-all
            duration-300
            hover:-translate-y-1
            hover:from-purple-500
            hover:to-pink-500
            hover:shadow-[0_14px_35px_rgba(168,85,247,0.30)]
            active:scale-95
            sm:px-8
            sm:py-4
          "
        >

          <Flower2
            className="
              h-4
              w-4
              transition-transform
              duration-500
              group-hover:rotate-12
            "
          />

          <span>
            One Last Garden
          </span>

          <ArrowRight
            className="
              h-4
              w-4
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
          no pressure, just flowers ♡
        </p>

      </section>
    </main>
  );
}