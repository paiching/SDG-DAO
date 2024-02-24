import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import MintCard from "@/components/MintCard";
import StickyForm from "@/components/StickyForm";
import FeatureSection from "@/components/FeatureSection";
import CardGrid from "@/components/Grid";
import Footer from "@/components/footer";
import '@/components/footer.module.css';

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between ${inter.className}`}
    >
      <FeatureSection />
      <section className="container mx-auto p-6">
        <CardGrid />
      </section>
      <StickyForm />
      <div className="flex flex-col w-full h-full">
        {/* <Header /> */}
        {/* <MintCard /> */}
      </div>
    </main>
  );
}
