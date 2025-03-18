import Link from "next/link";
import Navbar from "../components/home-page/Navbar";
import Footer from "@/components/home-page/Footer";
import FAQ from "@/components/home-page/FAQ";
import Instructors from "@/components/home-page/Instructors";
import Empower from "@/components/home-page/Empower";
import Qualities from "@/components/home-page/Qualities";
import WhatWeOffer from "@/components/home-page/WhatWeOffer";
import HeroSection from "@/components/home-page/HeroSection";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <WhatWeOffer />
      {/* <Qualities /> */}
      <Empower />
      <Instructors />
      <FAQ />
      <Footer />
    </div>
  );
}
