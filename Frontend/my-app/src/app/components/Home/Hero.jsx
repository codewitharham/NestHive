"use client";

import React from "react";
import { BackgroundBeams } from "../ui/backgroundBeams";
import { TextGenerateEffect } from "../ui/TextGenerateEffect";
import { FlipWords } from "../ui/FlipWords";
import { HoverBorderGradient } from "../ui/HoverBorderGradient";
import Link from "next/link";

const Hero = () => {
  const word2 = ["Where Developers Connect", "Empowering Open-Source"];

  return (
    <section className="relative flex flex-col items-center justify-center w-full min-h-screen bg-neutral-950 text-center antialiased">
      {/* Background Overlay */}
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-dot-black/[0.2]">
        <div className="absolute inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      </div>

      {/* Content Wrapper */}
      <div className="relative z-20 w-full max-w-5xl px-6 py-20 md:py-32">
        {/* Title */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-2">
          <TextGenerateEffect
            words="Build"
            className="text-white font-extrabold uppercase tracking-tight leading-none text-4xl sm:text-5xl md:text-7xl lg:text-8xl"
          />
          <TextGenerateEffect
            words="Together"
            className="text-white font-extrabold uppercase tracking-wide leading-none text-4xl sm:text-5xl md:text-7xl lg:text-8xl"
          />
        </div>

        {/* Animated Line Separator */}
        <div className="relative w-full h-10 mt-4">
          <div className="animate-pulse absolute inset-x-0 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-full blur-sm" />
          <div className="animate-pulse absolute inset-x-0 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-full" />
          <div className="animate-pulse absolute inset-x-0 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm mx-auto" />
          <div className="animate-pulse absolute inset-x-0 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4 mx-auto" />
        </div>

        {/* Subtitle Flip Words */}
        <FlipWords
          words={word2}
          className="font-light tracking-normal text-lg sm:text-2xl md:text-4xl"
        />

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <HoverBorderGradient
            containerClassName="rounded-full"
            as="button"
            className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 px-6 py-3 text-lg font-semibold"
          >
            <span>Join the Community</span>
          </HoverBorderGradient>
          <Link href="/ManageCollection" className="text-sm sm:text-base font-semibold text-white hover:underline">
            Manage Collection <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>

      {/* Background Animation */}
      <BackgroundBeams />
    </section>
  );
};

export default Hero;
    