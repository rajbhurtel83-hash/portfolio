"use client";

import dynamic from "next/dynamic";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/layout/ScrollProgress";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Leadership from "@/components/sections/Leadership";
import Startups from "@/components/sections/Startups";
import Achievements from "@/components/sections/Achievements";
import Investing from "@/components/sections/Investing";
import CommunityWork from "@/components/sections/CommunityWork";
import Experience from "@/components/sections/Experience";
import Vision from "@/components/sections/Vision";
import Contact from "@/components/sections/Contact";

import { AIChatProvider } from "@/context/AIChatContext";

// Dynamic imports for client-side only components
const CursorGlow = dynamic(
  () => import("@/components/shared/CursorGlow"),
  { ssr: false }
);

const PageLoader = dynamic(
  () => import("@/components/shared/PageLoader"),
  { ssr: false }
);

const SmoothScroll = dynamic(
  () => import("@/components/shared/SmoothScroll"),
  { ssr: false }
);

const AIChat = dynamic(
  () => import("@/components/ai/AIChat"),
  { ssr: false }
);

export default function Home() {
  return (
    <AIChatProvider>
      <PageLoader />
      <CursorGlow />
      <ScrollProgress />
      <SmoothScroll>
        <Navbar />
        <main>
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Leadership />
          <Startups />
          <Achievements />
          <Investing />
          <CommunityWork />
          <Experience />
          <Vision />
          <Contact />
        </main>
        <Footer />
      </SmoothScroll>
      <AIChat />
    </AIChatProvider>
  );
}
