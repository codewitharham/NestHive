"use client";

import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { LineChartMultiple } from "./components/ui/Charts/LineChartMultiple";
import { CTASection } from "./components/ui/CallToActions/CTA_Default_Right";
import { CTASectionLeft } from "./components/ui/CallToActions/CTA_Default_Left";
import { StickyScroll } from "./components/ui/scroll-reveal";
import { ParallaxScroll } from "./components/ui/ParallaxScroll";

// Dynamically import heavy components for performance optimization
const Hero = dynamic(() => import("./components/Home/Hero"), { suspense: true });

const Home = () => {
  const content = [
    {
      title: "Showcase Your Contributions",
      description:
        "Share your open-source projects, collaborate with developers worldwide, and build a portfolio that truly represents your skills. Our platform fosters a thriving developer community where contributions are valued and recognized.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white bg-gradient-to-br from-cyan-500 to-indigo-500">
          Open-Source Collaboration
        </div>
      ),
    },
    {
      title: "Instant Code Review & Feedback",
      description:
        "Get real-time feedback on your contributions. Our AI-powered system and experienced community members ensure that your code is optimized, efficient, and follows best practices.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white">
          <Image
            src="/ai-evaluation.png"
            width={400}
            height={250}
            className="h-full w-full object-cover"
            alt="Code Review & Feedback"
            loading="lazy"
          />
        </div>
      ),
    },
    {
      title: "Collaborate & Contribute",
      description:
        "Work on open-source projects with like-minded developers. Whether you're contributing to an existing project or starting your own, our platform enables seamless collaboration with version control, issue tracking, and integrated discussions.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white bg-gradient-to-br from-purple-500 to-pink-500">
          Team Collaboration
        </div>
      ),
    },
    {
      title: "Host & Manage Projects Easily",
      description:
        "Deploy your repositories with ease, manage issues efficiently, and keep track of all project activities from a single dashboard. Our cloud-based infrastructure ensures that your projects remain accessible and scalable.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white bg-gradient-to-br from-green-500 to-teal-500">
          Project Management
        </div>
      ),
    },
    {
      title: "Track Your Progress & Achievements",
      description:
        "Monitor your contributions with detailed analytics. Gain insights into your coding patterns, project impact, and community engagement through an intuitive performance dashboard.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white">
          <Image
            src="/performance-dashboard.png"
            width={400}
            height={250}
            className="h-full w-full object-cover"
            alt="Progress & Achievements"
            loading="lazy"
          />
        </div>
      ),
    },
  ];

  return (
    <>
      <Navbar />

      {/* Hero Section with Suspense */}
      <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
        <Hero />
      </Suspense>

      {/* CTA Section */}
      <CTASection
        Title="Join the Future of Open-Source Collaboration"
        subTitle="Contribute, collaborate, and showcase your skills in a thriving developer ecosystem. Whether you're an experienced coder or just starting out, our platform connects you with opportunities to grow and make an impact."
        display={
          <Image
            className="object-cover object-center"
            src="/Untitled_design__1_-removebg-preview.png"
            alt="mockup"
            width={600}
            height={600}
            loading="lazy"
          />
        }
        linkComponent={
          <Link
            href="#"
            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-800"
          >
            Get Started
          </Link>
        }
      />

      {/* Sticky Scroll Section */}
      <div className="py-12">
        <StickyScroll content={content} />
      </div>

      {/* CTA with Line Chart */}
      <CTASectionLeft
        Title="Your Contributions Matter"
        subTitle="Track your impact, collaborate with top developers, and enhance your coding journey. Join a community where every line of code you write makes a difference."
        display={
          <div>
            <LineChartMultiple />
          </div>
        }
      />

      <Footer />
    </>
  );
};

export default Home;
