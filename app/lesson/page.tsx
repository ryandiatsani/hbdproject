"use client";

import { useRouter } from "next/navigation";
import { ArrowRight, Sparkles } from "lucide-react";

function RoseSVG({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* petals */}
      <path
        d="M50 28C38 18 20 28 25 45C30 62 50 70 50 70C50 70 70 62 75 45C80 28 62 18 50 28Z"
        fill="#FB7185"
      />

      <path
        d="M50 35C42 27 32 34 35 44C38 53 50 58 50 58C50 58 62 53 65 44C68 34 58 27 50 35Z"
        fill="#F43F5E"
      />

      {/* stem */}
      <path
        d="M50 65C50 75 48 82 43 88"
        stroke="#22C55E"
        strokeWidth="5"
        strokeLinecap="round"
      />

      {/* leaf */}
      <path
        d="M48 76C35 70 30 78 42 84"
        fill="#4ADE80"
      />
    </svg>
  );
}


export default function Lesson() {
  const router = useRouter();

  return (
    <main className="
      min-h-screen
      relative
      overflow-hidden
      flex
      items-center
      justify-center
      px-6
      py-12
      bg-gradient-to-br
      from-red-50
      via-rose-50
      to-purple-100
    ">

      {/* background */}
      <div className="
        absolute
        -top-40
        right-0
        w-96
        h-96
        bg-rose-300/30
        rounded-full
        blur-3xl
        animate-pulse
      "/>

      <div className="
        absolute
        bottom-0
        left-0
        w-96
        h-96
        bg-purple-200/40
        rounded-full
        blur-3xl
        animate-pulse
      "/>


      <section className="
        relative
        z-10
        max-w-xl
        w-full
        text-center
      ">


        <div className="
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
        ">
          <RoseSVG className="w-12 h-12 animate-[float_3s_ease-in-out_infinite]" />
        </div>


        <h1 className="
          text-4xl
          md:text-5xl
          font-bold
          text-rose-500
          tracking-tight
        ">
          Something I Learned
        </h1>


        <p className="
          mt-3
          text-gray-500
        ">
          a small reflection
        </p>


        <div className="
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
        ">

          <Sparkles
            className="
              mx-auto
              mb-6
              w-5
              h-5
              text-rose-400
            "
          />


          <p className="
            text-xl
            md:text-2xl
            text-gray-700
            leading-relaxed
          ">
            I learned something
            <br />
            from knowing you.
          </p>


          <div className="
            w-16
            h-px
            bg-rose-200
            mx-auto
            my-8
          "/>


          <p className="
            text-gray-600
            leading-relaxed
          ">
            Sometimes,
            <br />
            the best things grow naturally.
          </p>


          <p className="
            mt-6
            text-gray-600
            leading-relaxed
          ">
            I&apos;ve learned that caring about someone
            <br />
            also means giving them space.
          </p>


          <p className="
            mt-6
            text-gray-500
            leading-relaxed
          ">
            I&apos;m grateful for the chance
            <br />
            to understand that better.
          </p>


          <p className="
            mt-8
            text-rose-500
            font-medium
          ">
            Some things are better
            <br />
            when they are allowed to grow slowly.
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
            from-rose-400
            to-pink-500
            text-white
            font-semibold
            shadow-lg
            hover:scale-105
            transition
            active:scale-95
          "
        >
          Continue

          <ArrowRight className="
            w-4
            h-4
            group-hover:translate-x-1
            transition
          "/>

        </button>

      </section>

    </main>
  );
}