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
      title: "Real-time Coding Challenges",
      description:
        "Participate in live coding competitions with real-time leaderboards. ProBattle provides an interactive environment where developers can test their skills against others in a fair and competitive setting.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white bg-gradient-to-br from-cyan-500 to-indigo-500">
          Live Coding Challenges
        </div>
      ),
    },
    {
      title: "AI-Powered Code Evaluation",
      description:
        "Our intelligent grading system evaluates code submissions instantly, providing feedback on efficiency, correctness, and best practices. Improve your coding skills with AI-driven insights.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white">
          <Image
            src="/ai-evaluation.png"
            width={400}
            height={250}
            className="h-full w-full object-cover"
            alt="AI Code Evaluation"
            loading="lazy"
          />
        </div>
      ),
    },
    {
      title: "Team Collaboration",
      description:
        "Work on group projects, hackathons, and competitions in real time. Our platform allows seamless collaboration with built-in version control, shared coding spaces, and integrated chat features.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white bg-gradient-to-br from-purple-500 to-pink-500">
          Team Collaboration
        </div>
      ),
    },
    {
      title: "Scalable Web Applications",
      description:
        "Deploy your full-stack applications efficiently with our cloud-based infrastructure. ProBattle ensures your projects are optimized for high traffic and secure performance.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white bg-gradient-to-br from-green-500 to-teal-500">
          Scalable Web Apps
        </div>
      ),
    },
    {
      title: "Performance Analytics & Monitoring",
      description:
        "Track your progress with detailed analytics. Our dashboard provides insights into performance trends, coding efficiency, and areas of improvement.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white">
          <Image
            src="/performance-dashboard.png"
            width={400}
            height={250}
            className="h-full w-full object-cover"
            alt="Performance Analytics"
            loading="lazy"
          />
        </div>
      ),
    },
  ];

  const reviews = [
    { title: "Review 1", description: "This is the first review." },
    { title: "Review 2", description: "This is the second review." },
    { title: "Review 3", description: "This is the third review." },
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
        Title="Ready to Take Your Coding Skills to the Next Level?"
        subTitle="Join CodeScience today and start your journey where ideas code and tech thrives. Whether you’re a beginner or an experienced developer, we have something for you."
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
            Register
          </Link>
        }
      />

      {/* Sticky Scroll Section */}
      <div className="py-12">
        <StickyScroll content={content}  />
      </div>

      {/* CTA with Line Chart */}
      <CTASectionLeft
        Title="Experience the Growth of CodeScience"
        subTitle="Join our thriving community and watch your skills soar. With CodeScience, you'll have access to the best resources and support to accelerate your learning and achieve your goals."
        display={
          <div>
            <LineChartMultiple />
          </div>
        }
      />

      {/* Review Section */}
      {/* <div>
        <ParallaxScroll reviews={reviews} />
      </div> */}

      <Footer />
    </>
  );
};

export default Home;
