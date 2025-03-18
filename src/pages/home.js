import Link from "next/link";
import Navbar from "../components/home-page/Navbar";
import Footer from "@/components/home-page/Footer";
import FAQ from "@/components/home-page/FAQ";
import Instructors from "@/components/home-page/Instructors";
import Empower from "@/components/home-page/Empower";
import Qualities from "@/components/home-page/Qualities";
export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold">Welcome to the Home Page</h1>
      </div>
      <Qualities />
      <Empower />
      <Instructors />
      <FAQ />
      <Footer />
    </div>
  );
}
