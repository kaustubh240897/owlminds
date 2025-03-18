import Link from "next/link";
import Navbar from "../components/home-page/Navbar";
import Footer from "@/components/home-page/Footer";
import FAQ from "@/components/home-page/FAQ";
import Instructors from "@/components/home-page/Instructors";
export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold">Welcome to the Home Page</h1>
      </div>
      <Instructors />
      <FAQ />
      <Footer />
    </div>
  );
}
