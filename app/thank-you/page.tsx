"use client";

import { useRouter } from "next/navigation";
import { ArrowRight, Sparkles } from "lucide-react";

function SunflowerSVG({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* petals */}
      <g fill="#FBBF24">
        <ellipse cx="50" cy="18" rx="8" ry="18" />
        <ellipse cx="50" cy="82" rx="8" ry="18" />
        <ellipse cx="18" cy="50" rx="18" ry="8" />
        <ellipse cx="82" cy="50" rx="18" ry="8" />

        <ellipse
          cx="50"
          cy="18"
          rx="8"
          ry="18"
          transform="rotate(45 50 50)"
        />

        <ellipse
          cx="50"
          cy="18"
          rx="8"
          ry="18"
          transform="rotate(-45 50 50)"
        />

        <ellipse
          cx="50"
          cy="18"
          rx="8"
          ry="18"
          transform="rotate(135 50 50)"
        />

        <ellipse
          cx="50"
          cy="18"
          rx="8"
          ry="18"
          transform="rotate(-135 50 50)"
        />
      </g>

      {/* center */}
      <circle
        cx="50"
        cy="50"
        r="20"
        fill="#92400E"
      />

      {/* seeds */}
      <g fill="#451A03">
        <circle cx="42" cy="43" r="2" />
        <circle cx="58" cy="43" r="2" />
        <circle cx="50" cy="52" r="2" />
        <circle cx="43" cy="58" r="2" />
        <circle cx="58" cy="57" r="2" />
      </g>
    </svg>
  );
}


export default function ThankYou() {
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
        px-6
        py-12
        bg-gradient-to-br
        from-yellow-50
        via-orange-50
        to-pink-100
      "
    >

      {/* Background glow */}
      <div
        className="
          absolute
          -top-40
          -right-40
          w-96
          h-96
          bg-yellow-300/30
          rounded-full
          blur-3xl
          animate-pulse
        "
      />

      <div
        className="
          absolute
          -bottom-40
          -left-40
          w-96
          h-96
          bg-orange-200/40
          rounded-full
          blur-3xl
          animate-pulse
        "
      />


      {/* Small floating lights */}
      <div className="
        absolute
        top-1/4
        left-[15%]
        w-2
        h-2
        rounded-full
        bg-yellow-300
        animate-ping
      " />

      <div className="
        absolute
        bottom-1/3
        right-[15%]
        w-2
        h-2
        rounded-full
        bg-orange-300
        animate-pulse
      " />


      <section className="
        relative
        z-10
        max-w-xl
        w-full
        text-center
      ">


        {/* Sunflower */}
        <div
          className="
            mx-auto
            mb-7
            w-24
            h-24
            rounded-full
            bg-white/60
            backdrop-blur-xl
            border
            border-white/70
            shadow-xl
            flex
            items-center
            justify-center
          "
        >
          <SunflowerSVG
            className="
              w-12
              h-12
              animate-[spin_12s_linear_infinite]
            "
          />
        </div>


        <h1
          className="
            text-4xl
            md:text-5xl
            font-bold
            text-orange-400
            tracking-tight
          "
        >
          Thank You
        </h1>





        <div
          className="
            mt-8
            bg-white/60
            backdrop-blur-xl
            border
            border-white/70
            rounded-[2rem]
            shadow-xl
            px-8
            py-10
            md:px-12
          "
        >
<p className="
  text-gray-600
  leading-relaxed
">
  Thank you for introducing me to movies.
</p>


<p className="
  mt-6
  text-gray-600
  leading-relaxed
">
  I never really watched them before,
  <br />
  but now I actually enjoy them.
</p>


<p className="
  mt-8
  text-gray-500
  leading-relaxed
">
  It&apos;s a small thing,
  <br />
  but I&apos;m glad you shared it with me.
</p>

          <p className="
            mt-8
            font-semibold
            text-orange-400
          ">
            So... thank you.
          </p>


          <p className="
            mt-3
            text-sm
            text-gray-400
          ">
            For the little things you probably forgot.
          </p>

        </div>


        <button
          onClick={() => router.push("/you")}
          className="
            mt-9
            group
            inline-flex
            items-center
            gap-2
            px-8
            py-3.5
            rounded-full
            bg-gradient-to-r
            from-orange-400
            to-rose-400
            text-white
            font-semibold
            shadow-lg
            hover:scale-105
            transition
            active:scale-95
          "
        >
          Next Garden

          <ArrowRight
            className="
              w-4
              h-4
              group-hover:translate-x-1
              transition
            "
          />

        </button>


      </section>

    </main>
  );
}